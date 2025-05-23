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
	const command = [
		process.env.YT_DLP || YT_DLP_BINARY,
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
		`--metadata artist="${data.artistName}"`,
		`--metadata album="${data.albumName}"`,
		`--metadata title="${data.trackName}"`,
	].join(" ");

	const proc = spawn(command, {
		shell: true,
		detached: true,
		stdio: "ignore",
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
