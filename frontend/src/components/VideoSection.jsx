import React from 'react'

const VideoSection = () => {
  return (
    <video class="max-w-7xl mx-auto md:h-full rounded-lg m-10" controls>
      <source
        src="https://docs.material-tailwind.com/demo.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoSection