export const getYouTubeId = (url) => {
    if (!url) return null;
    const match = url.match(/(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu\.be\/|https?:\/\/(?:www\.)?youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
};

export const getYouTubeThumbnail = (videoId) => {
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
};
