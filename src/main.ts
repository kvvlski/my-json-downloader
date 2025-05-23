import * as fs from "node:fs";
import * as path from "node:path";
import type { Track } from "./types";
import { downloadTrack } from "./downloader";

const jsonFilePath = path.join(__dirname, "../dumps/data.json"); // Path to your JSON file

async function main() {
	const jsonData = fs.readFileSync(jsonFilePath, "utf-8");
	const jsonArray = JSON.parse(jsonData) as Track[];

	const downloaded: string[] = [];
	const failed: string[] = [];

	for (const track of jsonArray) {
		console.log(`Searching: ${track.trackName} by ${track.artistName}`);
		const res = await downloadTrack({
			trackName: track.trackName,
			artistName: track.artistName,
			secondaryArtist: track.secondaryArtistsNames,
			albumName: track.albumName,
		});
		if (res) {
			console.log(`Downloaded ${track.trackName} by ${track.artistName}`);
			downloaded.push(track.trackName);
		} else {
			console.log(
				`Failed to download ${track.trackName} by ${track.artistName}`,
			);
			failed.push(track.trackName);
		}
	}

	console.log(`Downloaded ${downloaded.length}/${jsonArray.length} tracks`);
	console.log(`Failed to download ${failed.length} tracks`);

	fs.writeFileSync(
		path.join(__dirname, "../downloads/info.json"),
		JSON.stringify(
			{
				downloaded,
				failed,
			},
			null,
			2,
		),
		"utf-8",
	);
	console.log("Downloaded and failed tracks saved to downloads/info.json");
}

main();
