import React from 'react';

interface DisplayDataProps {
    data: any;
}

const DisplayData: React.FC<DisplayDataProps> = ({ data }) => {
    let results = data?.results[0]?.title;
    let cover = data?.results[0]?.cover_image;

    return (
        <div className='flex mt-6 justify-center'>
            <div>{results}</div>
            <img
                src={cover}
                alt="Cover" />
        </div>
    );
};

export default DisplayData;
