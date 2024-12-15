# Waterfall Simulation #
## 📖 Description ##
This project is an interactive Waterfall Simulation built using React and WebGL. The app provides a visually appealing waterfall effect, where users can manipulate various parameters like flow rate, size, particle speed, width, and transparency. The app also includes Randomize and Reset buttons to explore and reset simulation configurations instantly.

The purpose of this project is to showcase interactivity, dynamic particle systems, and customization using modern web technologies.

## 🚀 Features ##
Interactive Controls:
- Adjust Flow Rate: Change the number of water particles.
- Adjust Size: Modify the size of individual particles.
- Adjust Particle Speed: Control how fast the water particles fall.
- Adjust Waterfall Width: Change the horizontal spread of the waterfall.
- Adjust Water Transparency: Set the transparency level of the water particles.
- Randomize Button:
  - Randomizes all control parameters to generate a unique visual effect instantly.
- Reset Button:
  - Resets the simulation to the default values for a clean start.
- Fun Fact Box:
- Includes an educational "Fun Fact" about the tallest waterfall in the world.
## 🛠️ Technologies Used ##
- React: For the interactive UI and component management.
- WebGL: For rendering the dynamic waterfall particle system.
- JavaScript: Core programming language.
- CSS: For styling the UI and interactive elements.

## ⚙️ Default Settings ##
The simulation launches with the following default control values:

- Flow Rate: 1000
- Size: 7.5
- Particle Speed: 1.95
- Waterfall Width: 0.3
- Water Transparency: 1.0
- These values ensure the waterfall simulation looks visually appealing on startup.

## 🧑‍💻 How to Run This Project ##
Follow these steps to set up and run the project:

1. Clone the Repository

- - git clone <repository-url>

2. Install Dependencies

- Make sure you have Node.js installed, then install project dependencies:
- - npm install

3. Start the Development Server

- Run the app locally on a development server:
- - npm start

## 🎮 Usage Instructions ##
1. Adjust the Controls:
- Use the sliders to tweak flow rate, particle size, speed, width, and transparency.

2. Randomize Settings:
- Click the Randomize button to generate random values for all controls and observe the changes.

3. Reset to Defaults:
- Click the Reset button to revert to the default settings.

4. Observe Changes:
- Watch the waterfall simulation update in real time as you interact with the controls.

## 📝 Notes for the TA ##

1. Running the Project:
- Simply follow the "How to Run This Project" instructions above. The app will load with all default settings.

2. Testing Features:
- Use the sliders to manipulate the parameters.
- Verify the Randomize button generates unique settings and the Reset button restores defaults.

3. Code Overview:
- The core waterfall rendering logic is in Waterfall.js.
- UI controls are managed in Controls.js.
- Styling is handled in App.css.
