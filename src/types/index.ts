export interface Track {
    addedAt: string;
    addedBy: string;
    albumArtistsNames: string;
    albumName: string;
    albumPopularity: number;
    albumRecordLabel: string;
    albumReleaseDate: string;
    albumType: string;
    albumUpc: string;
    albumUri: string;
    albumUrl: string;
    artistFollowers: number;
    artistGenres: string;
    artistName: string;
    artistPopularity: number;
    artistUri: string;
    artistUrl: string;
    isLikedByUser: boolean;
    isLocal: string;
    secondaryArtistsNames: string;
    trackDuration: string;
    trackFeatureAcousticness: number;
    trackFeatureDanceability: number;
    trackFeatureEnergy: number;
    trackFeatureInstrumentalness: number;
    trackFeatureKey: number;
    trackFeatureLiveness: number;
    trackFeatureLoudness: number;
    trackFeatureMode: number;
    trackFeatureSpeechiness: number;
    trackFeatureTempo: number;
    trackFeatureTimeSignature: number;
    trackFeatureValence: number;
    trackIsrc: string;
    trackName: string;
    trackNumber: number;
    trackPopularity: number;
    trackUri: string;
    trackUrl: string;
}

export interface Album {
    albumName: string;
    albumArtistsNames: string;
    albumReleaseDate: string;
    albumUrl: string;
    albumType: string;
    albumPopularity: number;
}