export default function EventLogo({eventSubType, width, height, ...props}) {
    debugger
    const imgPath = eventSubType 
        ? `assets/logo/eventLogo/${eventSubType}.webp`
        : 'assets/logo/defaultEventLogo.webp';
    
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
