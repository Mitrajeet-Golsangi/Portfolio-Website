import MoneyManager from "../../assets/Project/Image 1.svg";
import LPG from "../../assets/Project/LGP_GAS_Detection.svg";
import GameDev from "../../assets/Project/Image 2.svg";
import FlutterSnips from "../../assets/Project/Image 3.svg";
import AQIPred from "../../assets/Project/Image 4.svg";
import NightPatrollingRobot from '../../assets/Project/Night_Patrolling_Robot.png';

import MoneyManagerPdf from '../../ProjectPapers/MoneyManager.pdf';
import GameDevPdf from '../../ProjectPapers/GameDev.pdf';
import AQIPredPdf from '../../ProjectPapers/AQI Prediction.pdf';
import LPGUtility from '../../ProjectPapers/LPG_Gas_Utility.pdf';

const data = [
    // Money Manager
    {
        img: MoneyManager,
        title: "Money Manager",
        body:
            "Money Manager is an online platform where various users can simulate the investment experience." +
            " The main function of the platform is to eradicate financial literacy from the youth. <br /> You can " +
            " <a href='https://money-manager-vit-pune.herokuapp.com' target='_blank'>visit the website</a><br/>" +
            "Various other functionalities were added in the project as the time progressed some of them included " +
            "<ol><li>BSE Sensex and NIFTY Prediction</li>" +
            "<li>Interest Rate Calculation</li>" +
            "<li>Expenses tracker</li>" +
            "<li>Etc.</li></ol>" +
            "<h4>Collaborators</h4>" +
            "<ul><li>Vedant Gokhale</li>" +
            "<li>Shriram Gole</li>" +
            "<li>Kaushal Gore</li>" +
            "<li>Aayush Gore</li></ul>",
        url: MoneyManagerPdf,
        inDev: false
    },
    // LPG System
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
            " The software is a simple Flutter mobile application which graphically represents the data collected from the sensors" +
            " The flutter application is connected to the local network and fetches the data created from the ESP8266 API" +
            " An addition to the current project is to upload the data to the internet and give the user a remote access." +
            " For further information on the project you can check out our <a target='_blank' href='https://www.youtube.com/watch?v=CzCsijlDDd8'>explanatory video</a>" +
            "<h4>Collaborators</h4>" +
            "<ul><li>Vivek Ghuge</li>" +
            "<li>Divija Godse</li>" +
            "<li>Vishwajeet Haralkar</li>" +
            "<li>Adityaraj Honraopatil</li></ul>",
        url: LPGUtility,
        inDev: false
    },
    // Game Development
    {
        img: GameDev,
        title: "Game Development",
        body:
            "This is a simple game developed in python using tkinter, pygame and ursula python libraries." +
            " The game is a combination of 6 games in total which are" +
            "<ol><li>Fruit Ninja</li>" +
            "<li>Chess</li>" +
            "<li>Stone Paper Scissors</li>" +
            "<li>2048 Game</li>" +
            "<li>Tic-Tac-Toe</li>" +
            "<li>Snake Game</li></ol>" +
            "All these games are embedded under an umbrella of a mini game in which the character can enter a" +
            " portion of a the screen to launch the particular game.<br />" +
            " I was working on the chess game in this project and have developed a multiplayer and single player" +
            " chess game with a simple AI engine as the opponent" +
            "<h4>Collaborators</h4>" +
            "<ul><li>Vedant Gokhale</li>" +
            "<li>Shriram Gole</li>" +
            "<li>Kaushal Gore</li>" +
            "<li>Aayush Gore</li></ul>",
        url: GameDevPdf,
        inDev: false
    },
    // Flutter Snippets
    {
        img: FlutterSnips,
        title: "Flutter Snippets",
        body:
            "This is a Developer Students Club, VIT Pune repository, which contains nearly all the snippets" +
            " needed to develop a Flutter application. The main motive of this repository is to enable a fellow" +
            " programmer to easily create a flutter application using the 'skeleton' template launched in 2021.<br /><br />" +
            " I created a snippet for email authentication in a flutter application using the Firebase backend. This is" +
            " one of the snippets included in the repository and many more are constantly being added.<br />" +
            "If you are a fellow Flutter developer do check it out and please contribute if you have some useful snippets.<br />" +
            "<center><a href='https://github.com/dscvitpune/flutter-snippets' target='_blank'>visit the Repo</a></center>",
        url: null,
        inDev: true
    },
    // AQI Prediction
    {
        img: AQIPred,
        title: "AQI Prediction",
        body:
            " This is a project for prediction of the Air Quality Index (AQI) in India" +
            " We have used R language to perform all the predictions." +
            "<h4>Algorithms</h4>" +
            "<ol><li>Multiple Linear Regression</li>" +
            "<ol><li>With imputation</li>" +
            "<li>Without Imputation</li></ol>" +
            "<li>Random Forest</li>" +
            "<ol><li>With Imputation</li>" +
            "<li>Without Imputation</li></ol></ol>",
        url: AQIPredPdf,
        inDev: false
    },
    // Night Patrolling Robot
    {
        img: NightPatrollingRobot,
        title: "Night Patrolling Robot",
        body:
            " This project aims to address the security concerns at night. Most of the" +
            " robberies happen at night due to poor security, in rural areas apex predators" +
            " may attack. Thus in order to minimize the harm to human life the robot will" +
            " scan the area and search for any threats" +
            "You can check out the project on TinkerCAD Here" +
            "<iframe width=\"100%\" height=\"400\" src=\"https://www.tinkercad.com/embed/4RWvRK4Ga8u?editbtn=1" +
            "frameborder=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\"></iframe>" +
            "<h4>Collaborators</h4>" +
            "<ul><li>Vivek Ghuge</li>" +
            "<li>Divija Godse</li>" +
            "<li>Vishwajeet Haralkar</li>" +
            "<li>Adityaraj Honraopatil</li></ul>",
        url: null,
        inDev: true
    }

];
export default data;