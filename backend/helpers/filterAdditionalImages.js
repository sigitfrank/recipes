function filterAdditionalImages(additionalImagesValue, files, userId) {
    const dirUpload = `/uploads/images/recipes/${userId}`
    if (files.additionalImages1) {
        additionalImagesValue = [...additionalImagesValue, { id: additionalImagesValue.length + 1, value: `${dirUpload}/${files.additionalImages1[0].filename}` }]
    }
    if (files.additionalImages2) {
        additionalImagesValue = [...additionalImagesValue, { id: additionalImagesValue.length + 1, value: `${dirUpload}/${files.additionalImages2[0].filename}` }]
    }
    if (files.additionalImages3) {
        additionalImagesValue = [...additionalImagesValue, { id: additionalImagesValue.length + 1, value: `${dirUpload}/${files.additionalImages3[0].filename}` }]
    }
    if (files.additionalImages4) {
        additionalImagesValue = [...additionalImagesValue, { id: additionalImagesValue.length + 1, value: `${dirUpload}/${files.additionalImages4[0].filename}` }]
    }
    if (files.additionalImages5) {
        additionalImagesValue = [...additionalImagesValue, { id: additionalImagesValue.length + 1, value: `${dirUpload}/${files.additionalImages5[0].filename}` }]
    }
    if (files.additionalImages6) {
        additionalImagesValue = [...additionalImagesValue, { id: additionalImagesValue.length + 1, value: `${dirUpload}/${files.additionalImages6[0].filename}` }]
    }
    if (files.additionalImages7) {
        additionalImagesValue = [...additionalImagesValue, { id: additionalImagesValue.length + 1, value: `${dirUpload}/${files.additionalImages7[0].filename}` }]
    }
    if (files.additionalImages8) {
        additionalImagesValue = [...additionalImagesValue, { id: additionalImagesValue.length + 1, value: `${dirUpload}/${files.additionalImages8[0].filename}` }]
    }
    return additionalImagesValue
}

export default filterAdditionalImages