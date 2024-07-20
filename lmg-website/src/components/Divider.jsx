export default function Divider(props) {
    return (
        <>
            <div className="flex w-full flex-col lg:flex-row">
                <div className="lg:w-1/2">
                    {props.content1}
                </div>
                <div className="divider lg:divider-horizontal"></div>
                <div className="lg:w-1/2">
                    {props.content2}
                </div>
            </div>
        </>
    )
}