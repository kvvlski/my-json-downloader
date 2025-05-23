import { spawn } from "node:child_process";
import * as path from "node:path";

const YT_DLP_BINARY = path.join(__dirname, "../bin/yt-dlp.exe");

export const downloadTrack = (data: {
	trackName: string;
	artistName: string;
	secondaryArtist: string;
	albumName: string;
}): Promise<boolean> => {
	const fullTrackname = `${[data.artistName, data.secondaryArtist].join(
		", ",
	)} - ${data.trackName}`;
	const safeTrackName = fullTrackname.replace(/[^a-zA-Z0-9\s]/g, "_");
	const proc = spawn(
		process.env.YT_DLP || "yt-dlp",
		[
			"--no-warnings",
			"--no-check-certificate",
			"--format",
			"bestaudio/best",
			"--extract-audio",
			"--audio-format",
			"opus",
			"--output",
			"downloads/%(title)s.%(ext)s",
			`ytsearch1:"${safeTrackName}"`,
			"--add-metadata",
			"--embed-metadata",
			"--metadata",
			`artist="${data.artistName}"`,
			"--metadata",
			`title="${data.trackName}"`,
			"--metadata",
			`album="${data.albumName}"`,
		],
		{
			stdio: "inherit",
		},
	);
	proc.on("error", (err) => {
		console.error("Error spawning process:", err);
	});
	return new Promise((resolve) => {
		proc.on("exit", (code) => {
			if (code === 0) {
				resolve(true);
			} else {
				resolve(false);
			}
		});
	});
};
