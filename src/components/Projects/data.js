import MoneyManager from "../../assets/Image 1.svg";
import LPG from "../../assets/LGP_GAS_Detection.svg";
import GameDev from "../../assets/Image 2.svg";
import FlutterSnips from "../../assets/Image 3.svg";
import AQIPred from "../../assets/Image 4.svg";

const data = [
    {
        img: MoneyManager,
        title: "MoneyManager",
        body:
            "Money Manager is an online platform where various users can simulate the investment experience." +
            " The main function of the platform is to eradicate financial literacy from the youth. <br /> You can " +
            " <a href='https://money-manager-vit-pune.herokuapp.com' target='_blank'><u>visit the website</u></a><br/>" +
            "Various other functionalities were added in the project as the time progressed some of them included " +
            "<ol><li>BSE Sensex and NIFTY Prediction</li>" +
            "<li>Interest Rate Calculation</li>" +
            "<li>Expenses tracker</li>" +
            "<li>Etc.</li></ol>" +
            " The collaborators in this project were : <br />" +
            "<ul><li>Vedant Gokhale</li>" +
            "<li>Shriram Gole</li>" +
            "<li>Kaushal Gore</li>" +
            "<li>Aayush Gore</li></ul>",
    },
    {
        img: LPG,
        title: "LPG Gas Utility System",
        body:
            "This is a project which will help everyday cooks in the gas utilization aspects." +
            " The project is deemed to be a complete utility toolkit for the spaces having LPG gas cylinders <br />" +
            " The project serves two main purposes " +
            "<ol><li>LPG Level Detection</li>" +
            "<li>LPG Leakage Detection</li></ol>" +
            "The system mainly consists of two parts" +
            "<h4>Hardware</h4>" +
            "The hardware part handles all the data collection like measuring the weight of teh cylinder using the force sensor" +
            " and measuring the atmospheric gas level using the MQ-135 gas sensor. The hardware is connected to a local WiFi network" +
            " using the ESP8266 WiFi module which is contained in the nodeMCU microprocessor" +
            "<h4>Software</h4>" +
            "The software is a simple Flutter mobile application which graphically represents the data collected from the sensors",
    },
    {
        img: GameDev,
        title: "Game Development",
        body: "",
    },
    {
        img: FlutterSnips,
        title: "Flutter Snippets",
        body: "",
    },
    {
        img: AQIPred,
        title: "AQI Prediction",
        body: "",
    },
];
export default data;