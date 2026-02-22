import { useState, useEffect } from 'react';
import { getYouTubeId, getYouTubeThumbnail } from '../utils/youtube';

export const useEditTest = (test, isOpen, onSave) => {
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [youtubeUser, setYoutubeUser] = useState('');

    useEffect(() => {
        if (test) {
            setYoutubeUrl(test.youtubeUrl || '');
            setThumbnailUrl(test.thumbnailUrl || '');
            setYoutubeUser(test.youtubeUser || '');
        }
    }, [test, isOpen]);

    const handleSave = (e) => {
        if (e) e.preventDefault();
        onSave({
            ...test,
            youtubeUrl,
            thumbnailUrl,
            youtubeUser
        });
    };

    const pasteFromClipboard = async (setter) => {
        try {
            const text = await navigator.clipboard.readText();
            setter(text);
        } catch (err) {
            console.error('Failed to read clipboard', err);
        }
    };

    const useYoutubeThumb = () => {
        const videoId = getYouTubeId(youtubeUrl);
        if (videoId) {
            setThumbnailUrl(getYouTubeThumbnail(videoId));
        }
    };

    const clearInputs = () => {
        setYoutubeUrl('');
        setThumbnailUrl('');
        setYoutubeUser('');
    };

    return {
        youtubeUrl,
        setYoutubeUrl,
        thumbnailUrl,
        setThumbnailUrl,
        youtubeUser,
        setYoutubeUser,
        handleSave,
        pasteFromClipboard,
        useYoutubeThumb,
        clearInputs
    };
};
