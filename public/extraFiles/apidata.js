const express = require('express');
const app = express();
const port = 8081;

// Define the route
app.get('/api/data', (req, res) => {
    res.json({
        user: {
            name: "shadcn",
            email: "m@example.com",
            avatar: "/avatars/demo-avatar.jpg",
        },
        teams: [
            {
                name: "Acme Inc",
                logo: "GalleryVerticalEnd",
                plan: "Enterprise",
            },
            {
                name: "Acme Corp.",
                logo: "AudioWaveform",
                plan: "Startup",
            },
            {
                name: "Evil Corp.",
                logo: "Command",
                plan: "Free",
            },
        ],
        navMain: [
            {
                title: "Playground",
                url: "#",
                icon: "SquareTerminal",
                isActive: true,
                items: [
                    { title: "History", url: "#" },
                    { title: "Starred", url: "#" },
                    { title: "Settings", url: "#" },
                ],
            },
            {
                title: "Models",
                url: "#",
                icon: "Bot",
                items: [
                    { title: "Genesis", url: "#" },
                    { title: "Explorer", url: "#" },
                    { title: "Quantum", url: "#" },
                ],
            },
            {
                title: "Documentation",
                url: "#",
                icon: "BookOpen",
                items: [
                    { title: "Introduction", url: "#" },
                    { title: "Get Started", url: "#" },
                    { title: "Tutorials", url: "#" },
                    { title: "Changelog", url: "#" },
                ],
            },
            {
                title: "Settings",
                url: "#",
                icon: "Settings2",
                items: [
                    { title: "General", url: "#" },
                    { title: "Team", url: "#" },
                    { title: "Billing", url: "#" },
                    { title: "Limits", url: "#" },
                ],
            },
        ],
        projects: [
            {
                name: "Design Engineering",
                url: "#",
                icon: "Frame",
            },
            {
                name: "Sales & Marketing",
                url: "#",
                icon: "PieChart",
            },
            {
                name: "Travel",
                url: "#",
                icon: "Map",
            },
        ],
    });
});

app.get('/api/data/teams', (req, res) => {

    setTimeout(()=>{
        res.json({teams:[
                {
                    name: "Acme Inc",
                    logo: "GalleryVerticalEnd",
                    plan: "Enterprise",
                },
                {
                    name: "Acme Corp.",
                    logo: "AudioWaveform",
                    plan: "Startup",
                },
                {
                    name: "Evil Corp.",
                    logo: "Command",
                    plan: "Free",
                },
            ]});
    },2000)

});


app.get('/api/data/pieData', (req, res) => {
    setTimeout(()=>{
        res.json([
            { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
            { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
            { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
            { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
            { browser: "other", visitors: 190, fill: "var(--color-other)" },
        ]);
    },2000);
});

app.get('/api/data/radarData', (req, res) => {
    setTimeout(()=>{
        res.json([
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 273 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
        ]);
    },1500);
});

app.get('/api/data/barData', (req, res) => {
    setTimeout(()=>{
        res.json([
            { date: "2024-04-01", desktop: 222, mobile: 150 },
            { date: "2024-04-02", desktop: 97, mobile: 180 },
            { date: "2024-04-03", desktop: 167, mobile: 120 },
            { date: "2024-04-04", desktop: 242, mobile: 260 },
            { date: "2024-04-05", desktop: 373, mobile: 290 },
            { date: "2024-04-06", desktop: 301, mobile: 340 },
            { date: "2024-04-07", desktop: 245, mobile: 180 },
            { date: "2024-04-08", desktop: 409, mobile: 320 },
            { date: "2024-04-09", desktop: 59, mobile: 110 },
            { date: "2024-04-10", desktop: 261, mobile: 190 },
            { date: "2024-04-11", desktop: 327, mobile: 350 },
            { date: "2024-04-12", desktop: 292, mobile: 210 },
            { date: "2024-04-13", desktop: 342, mobile: 380 },
            { date: "2024-04-14", desktop: 137, mobile: 220 },
            { date: "2024-04-15", desktop: 120, mobile: 170 },
            { date: "2024-04-16", desktop: 138, mobile: 190 },
            { date: "2024-04-17", desktop: 446, mobile: 360 },
            { date: "2024-04-18", desktop: 364, mobile: 410 },
            { date: "2024-04-19", desktop: 243, mobile: 180 },
            { date: "2024-04-20", desktop: 89, mobile: 150 },
            { date: "2024-04-21", desktop: 137, mobile: 200 },
            { date: "2024-04-22", desktop: 224, mobile: 170 },
            { date: "2024-04-23", desktop: 138, mobile: 230 },
            { date: "2024-04-24", desktop: 387, mobile: 290 },
            { date: "2024-04-25", desktop: 215, mobile: 250 },
            { date: "2024-04-26", desktop: 75, mobile: 130 },
            { date: "2024-04-27", desktop: 383, mobile: 420 },
            { date: "2024-04-28", desktop: 122, mobile: 180 },
            { date: "2024-04-29", desktop: 315, mobile: 240 },
            { date: "2024-04-30", desktop: 454, mobile: 380 },
            { date: "2024-05-01", desktop: 165, mobile: 220 },
            { date: "2024-05-02", desktop: 293, mobile: 310 },
            { date: "2024-05-03", desktop: 247, mobile: 190 },
            { date: "2024-05-04", desktop: 385, mobile: 420 },
            { date: "2024-05-05", desktop: 481, mobile: 390 },
            { date: "2024-05-06", desktop: 498, mobile: 520 },
            { date: "2024-05-07", desktop: 388, mobile: 300 },
            { date: "2024-05-08", desktop: 149, mobile: 210 },
            { date: "2024-05-09", desktop: 227, mobile: 180 },
            { date: "2024-05-10", desktop: 293, mobile: 330 },
            { date: "2024-05-11", desktop: 335, mobile: 270 },
            { date: "2024-05-12", desktop: 197, mobile: 240 },
            { date: "2024-05-13", desktop: 197, mobile: 160 },
            { date: "2024-05-14", desktop: 448, mobile: 490 },
            { date: "2024-05-15", desktop: 473, mobile: 380 },
            { date: "2024-05-16", desktop: 338, mobile: 400 },
            { date: "2024-05-17", desktop: 499, mobile: 420 },
            { date: "2024-05-18", desktop: 315, mobile: 350 },
            { date: "2024-05-19", desktop: 235, mobile: 180 },
            { date: "2024-05-20", desktop: 177, mobile: 230 },
            { date: "2024-05-21", desktop: 82, mobile: 140 },
            { date: "2024-05-22", desktop: 81, mobile: 120 },
            { date: "2024-05-23", desktop: 252, mobile: 290 },
            { date: "2024-05-24", desktop: 294, mobile: 220 },
            { date: "2024-05-25", desktop: 201, mobile: 250 },
            { date: "2024-05-26", desktop: 213, mobile: 170 },
            { date: "2024-05-27", desktop: 420, mobile: 460 },
            { date: "2024-05-28", desktop: 233, mobile: 190 },
            { date: "2024-05-29", desktop: 78, mobile: 130 },
            { date: "2024-05-30", desktop: 340, mobile: 280 },
            { date: "2024-05-31", desktop: 178, mobile: 230 },
            { date: "2024-06-01", desktop: 178, mobile: 200 },
            { date: "2024-06-02", desktop: 470, mobile: 410 },
            { date: "2024-06-03", desktop: 103, mobile: 160 },
            { date: "2024-06-04", desktop: 439, mobile: 380 },
            { date: "2024-06-05", desktop: 88, mobile: 140 },
            { date: "2024-06-06", desktop: 294, mobile: 250 },
            { date: "2024-06-07", desktop: 323, mobile: 370 },
            { date: "2024-06-08", desktop: 385, mobile: 320 },
            { date: "2024-06-09", desktop: 438, mobile: 480 },
            { date: "2024-06-10", desktop: 155, mobile: 200 },
            { date: "2024-06-11", desktop: 92, mobile: 150 },
            { date: "2024-06-12", desktop: 492, mobile: 420 },
            { date: "2024-06-13", desktop: 81, mobile: 130 },
            { date: "2024-06-14", desktop: 426, mobile: 380 },
            { date: "2024-06-15", desktop: 307, mobile: 350 },
            { date: "2024-06-16", desktop: 371, mobile: 310 },
            { date: "2024-06-17", desktop: 475, mobile: 520 },
            { date: "2024-06-18", desktop: 107, mobile: 170 },
            { date: "2024-06-19", desktop: 341, mobile: 290 },
            { date: "2024-06-20", desktop: 408, mobile: 450 },
            { date: "2024-06-21", desktop: 169, mobile: 210 },
            { date: "2024-06-22", desktop: 317, mobile: 270 },
            { date: "2024-06-23", desktop: 480, mobile: 530 },
            { date: "2024-06-24", desktop: 132, mobile: 180 },
            { date: "2024-06-25", desktop: 141, mobile: 190 },
            { date: "2024-06-26", desktop: 434, mobile: 380 },
            { date: "2024-06-27", desktop: 448, mobile: 490 },
            { date: "2024-06-28", desktop: 149, mobile: 200 },
            { date: "2024-06-29", desktop: 103, mobile: 160 },
            { date: "2024-06-30", desktop: 446, mobile: 400 },
        ]);
    },1000)
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
