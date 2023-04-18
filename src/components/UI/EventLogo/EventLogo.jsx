export default function EventLogo({eventSubType, width, height, ...props}) {
    const imgPath = eventSubType  
        ? `${process.env.PUBLIC_URL}/assets/logo/eventLogo/${eventSubType}.webp`
        : `${process.env.PUBLIC_URL}/assets/logo/defaultEventLogo.webp`;
    return (
        <img 
            style={{
                width,
                height,
                minHeight: height
            }} 
            src={imgPath} 
            {...props}
        />
    );
}
