export default function EventLogo({eventSubType, width, height, ...props}) {
    const imgPath = eventSubType 
        ? `assets/logo/eventLogo/${eventSubType}.png`
        : 'assets/logo/defaultEventLogo.png';
    
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