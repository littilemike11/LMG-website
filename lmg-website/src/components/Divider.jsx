export default function Divider(props) {
    return (
        <>
            <div className="flex w-full flex-col lg:flex-row">
                {props.content1}
                <div className="divider lg:divider-horizontal"></div>
                {props.content2}
            </div>
        </>
    )
}