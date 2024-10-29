import attendeesImage from '../assets/attendees.png';
import Image from '../assets/camera.png';


export const fakeData = [
    {
        id: 1,
        uploaderName: "Alice Johnson",
        uploadTime: "2024-10-28T14:32:00Z", 
        additionalNotes: "This image shows the main setup for the event. Please use this as a reference for layout.",
        imgSrc:Image, 
        position: JSON.stringify({ x: 100, y: 450 }), // Initial position on the canvas
    },
    {
        id: 2,
        uploaderName: "Bob Smith",
        uploadTime: "2024-10-28T15:45:00Z",
        additionalNotes: "Backdrop options: This image has the preferred color scheme and lighting for the setup.",
        imgSrc:attendeesImage ,
        position: JSON.stringify({ x: 250, y: 360 }),
    },
    {
        id: 3,
        uploaderName: "Carla Green",
        uploadTime: "2024-10-28T16:00:00Z",
        additionalNotes: "Additional decorations can be arranged around this area, as shown in the image.",
        imgSrc:attendeesImage ,
        position: JSON.stringify({ x: 390, y: 430 }),
    },
    {
        id: 4,
        uploaderName: "David Lee",
        uploadTime: "2024-10-28T17:10:00Z",
        additionalNotes: "Close-up of the event signage placement. Make sure it’s clearly visible as shown.",
        imgSrc:attendeesImage ,
        position: JSON.stringify({ x: 400, y: 370 }),
    },
    {
        id: 5,
        uploaderName: "Ella Brown",
        uploadTime: "2024-10-28T18:30:00Z",
        additionalNotes: "Lighting details for evening events. Ensure similar lighting arrangement.",
        imgSrc:attendeesImage ,
        position: JSON.stringify({ x: 500, y: 450 }),
    }
];
