import React from 'react';
import YoutubeSection from './YoutubeSection';
import ThumbnailSection from './ThumbnailSection';

const EditFormFields = ({
    youtubeUrl, setYoutubeUrl,
    thumbnailUrl, setThumbnailUrl,
    youtubeUser, setYoutubeUser,
    pasteFromClipboard,
    useYoutubeThumb,
    clearInputs
}) => {
    return (
        <div className="space-y-8">
            <YoutubeSection
                youtubeUrl={youtubeUrl}
                setYoutubeUrl={setYoutubeUrl}
                youtubeUser={youtubeUser}
                setYoutubeUser={setYoutubeUser}
                pasteFromClipboard={pasteFromClipboard}
            />

            <div className="h-px bg-white/5" />

            <ThumbnailSection
                thumbnailUrl={thumbnailUrl}
                setThumbnailUrl={setThumbnailUrl}
                pasteFromClipboard={pasteFromClipboard}
                useYoutubeThumb={useYoutubeThumb}
                clearInputs={clearInputs}
            />
        </div>
    );
};

export default EditFormFields;
