
async function getSideBarHeaderData(){

    const data: sideBarHeaderData = await fetch('http://localhost:3000/api/getData').then((res): Promise<sideBarHeaderData> => res.json());
    return data;
}

export {
    getSideBarHeaderData
}