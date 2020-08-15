var firebaseConfig = {
    apiKey: "AIzaSyBTRp7A9moWiuX3qwhABfELWVLdNKqSS0o",
    authDomain: "tecbiosbrazil-69430.firebaseapp.com",
    databaseURL: "https://tecbiosbrazil-69430.firebaseio.com",
    projectId: "tecbiosbrazil-69430",
    storageBucket: "tecbiosbrazil-69430.appspot.com",
    messagingSenderId: "893507120163",
    appId: "1:893507120163:web:b06d5544b3143308385596"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  function renderTasks(){
    const files = document.getElementById("files")
    files.innerHTML=""
    for (processor of processors){
        const newItem = document.createElement("input")
        newItem.value=processor.title
        const newItem2 = document.createElement("input")
        newItem2.value=processor.value
        const newItem3 = document.createElement("input")
        newItem3.value=processor.base_frequency
        const newItem4 = document.createElement("input")
        newItem4.value=processor.bus_speed
        const newItem5 = document.createElement("input")
        newItem5.value=processor.cache
        const newItem6 = document.createElement("input")
        newItem6.value=processor.cores
        const newItem7 = document.createElement("input")
        newItem7.value=processor.instructions
        const newItem8 = document.createElement("input")
        newItem8.value=processor.integrated_graphics
        const newItem9 = document.createElement("input")
        newItem9.value=processor.launch_price
        files.appendChild(newItem)
        files.appendChild(newItem2)
        files.appendChild(newItem3)
        files.appendChild(newItem4)
        files.appendChild(newItem5)
        files.appendChild(newItem6)
        files.appendChild(newItem7)
        files.appendChild(newItem8)
        files.appendChild(newItem9)
        addTasks()

    }
  }

async function readTasks() {
    processors = []
    const logPrc1 = await db.collection("processors").get()
    for (doc of logPrc1.docs) {
    processors.push({
        id: doc.id,
        title: doc.data().title,
        value: doc.data().value,
        base_frequency: doc.data(). base_frequency,
        bus_speed: doc.data(). bus_speed,
        cache: doc.data(). cache,
        cores: doc.data(). cores,
        instructions: doc.data(). instructions,
        integrated_graphics: doc.data(). integrated_graphics,
        launch_price: doc.data(). launch_price,
        })
    }
    renderTasks()
}
readTasks()
