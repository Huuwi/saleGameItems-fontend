

function ContentSaling(props) {
    let data = props?.salingData || [];
    let htmlContent = data.map((e, i) => {
        return <h1 key={i}>{e?.image || 'Không có dữ liệu'}</h1>
    })

    return (
        <>
            {htmlContent}
        </>
    )
}

export default ContentSaling;