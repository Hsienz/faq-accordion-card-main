const require = (path) => {
    return new URL( path, import.meta.url ).href
}

export default require