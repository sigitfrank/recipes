import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
function SkeletonLoading({ circle = false, width="100%", height }) {
    return (
        <SkeletonTheme color="#e4e4e4ab" highlightColor="#bbbbbbab">
            <Skeleton circle={circle} width={width} height={height} />
        </SkeletonTheme>
    )
}

export default SkeletonLoading
