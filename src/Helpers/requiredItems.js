import Raincoat from '../Images/Raincoat.png'
import Sanitation from '../Images/Sanitation.png'
import WaterproofBoots from '../Images/WaterproofBoots.png'
import Umbrella from '../Images/Umbrella.png'
import Cap from '../Images/Cap.png'
import Sunglasses from '../Images/Sunglasses.png'
import Gloves from '../Images/Gloves.png'
import Mask from '../Images/Mask.png'
import Goggles from '../Images/Goggles.png'
import SandScarf from '../Images/Scarf.png'
import Flashlight from '../Images/Flashlight.png'
import Jacket from '../Images/Jacket.png'
import Watch from '../Images/Watch.png'
import Sunscream from '../Images/Sunscream.png'
import MosquitoRepellent from '../Images/MosquitoRepellent.png'

const requiredItems = {
    Thunderstorm: {
        Raincoat: Raincoat,
        Flashlight: Flashlight,
        'Waterproof Boots': WaterproofBoots,
    },
    Drizzle: {
        Raincoat: Raincoat,
        'Waterproof Boots': WaterproofBoots,
        Umbrella: Umbrella,
    },
    Rain: {
        Raincoat: Raincoat,
        'Waterproof Boots': WaterproofBoots,
        Umbrella: Umbrella,
    },
    Snow: {
        Sunglasses: Sunglasses,
        Gloves: Gloves,
        Jacket: Jacket,
    },
    Mist: {
        Watch: Watch,
        Goggles: Goggles,
        Mask: Mask,
    },
    Smoke: {
        Watch: Watch,
        Goggles: Goggles,
        Mask: Mask,
    },
    Haze: {
        Watch: Watch,
        Goggles: Goggles,
        Mask: Mask,
    },
    Dust: {
        Watch: Watch,
        Goggles: Goggles,
        Mask: Mask,
    },
    Fog: {
        Watch: Watch,
        Goggles: Goggles,
        Mask: Mask,
    },
    Sand: {
        Mask: Mask,
        Goggles: Goggles,
        'Sand Scarf': SandScarf,
    },
    Ash: {
        Watch: Watch,
        Goggles: Goggles,
        Mask: Mask,
    },
    Squall: {
        Watch: Watch,
        Goggles: Goggles,
        Mask: Mask,
    },
    Tornado: {
        Sanitation: Sanitation,
        Flashlight: Flashlight,
        Goggles: Goggles,
    },
    Clear: {
        Sunglasses: Sunglasses,
        BaseballCap: Cap,
        Sunscream: Sunscream,
    },
    Clouds: {
        BaseballCap: Cap,
        Watch: Watch,
        'Mosquito Repellent': MosquitoRepellent,
    },
};

export default requiredItems;