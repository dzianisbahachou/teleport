export default function EventLogo({eventSubType, width, height, ...props}) {
    debugger
    const imgPath = eventSubType 
        ? `assets/logo/eventLogo/${eventSubType}.webp`
        : 'assets/logo/defaultEventLogo.webp';
    
    return (
        <img 
            style={{
                width: "100px",
                height: "100px",
                minHeight: "100px"
            }} 
            src={imgPath} 
            {...props}
        />
    );
}