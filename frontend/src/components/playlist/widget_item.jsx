export const WidgetItem = (props) => {

    return (
        <div>
            <iframe
                title="playlist-widget"
                src={`https://open.spotify.com/embed/playlist/${props.widgetId}`}
                width="300"
                height="380"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                className='playlist-show-widget'
            ></iframe>
        </div>
    )
}