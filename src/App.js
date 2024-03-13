import "./styles.css";
import { useState } from "react";

function App() {
  // Ana bileşen, sadece RobotList bileşenini render eder.
  return <RobotList />;
}

const RobotList = () => {
  // Robot listesini ve girilen metni tutmak için state'ler tanımlanır.
  const [robotList, setRobotList] = useState([]);
  const [input, setInput] = useState("");

  // Robot ekleme fonksiyonu
  const handleAddRobot = () => {
    // Input alanı boş ise uyarı ver ve işlemi sonlandır
  if (input.trim() === "") {
    alert("Lütfen bir robot ismi girin.");
    return;
  }
    // Girilen robot isminin listede olup olmadığını kontrol edelim
    if (robotList.find((robot) => robot.name === input)) {
      // Eger robot listedeyse, uyarı verir.
      alert("Robot listede bulunmakta!");
      return;
    }
  
    // Yeni bir robot nesnesi oluşturulur.
    const newRobot = {
      name: input,
      img: `https://robohash.org/${input}`,
    };

    // Yeni robot ile güncellenmiş listeyi state'e kaydeder.
    setRobotList([...robotList, newRobot]);

    // Girilen metni temizler.
    setInput("");
  };

  // Robot kaldırma fonksiyonu
  const handleRemoveRobot = (robotName) => {
    // Girilen isimle eşleşmeyen robotları içeren yeni bir liste oluşturulur.
    const filteredList = robotList.filter((robot) => robot.name !== robotName);

    // Güncellenmiş listeyi state'e kaydeder.
    setRobotList(filteredList);
  };

  return (
    <div className="container">
     
      <div className="input-container">
        {/* Input alanı ve ekleme butonu içeren container */}
        <input
          type="text"
          placeholder="Generate Robot"
          value={input}
          // Girilen metni state'e kaydeder.
          onChange={(e) => setInput(e.target.value)}
          style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "8px 12px",
            width: "300px",
            height: "40px",
            fontSize: "16px",
          }}// Mor kenarlık eklendi
        />
        <button 
        onClick={handleAddRobot} 
        style={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "8px 12px",
            backgroundColor: "#337ab7",
            color: "white",
            fontSize: "16px",
          }}>Enter</button>
        <h1>Robot Listesi</h1>
      </div>
      <div className="robot-list">
        {robotList.map((robot) => (
          <div className="robot-card" key={robot.name} onClick={() => handleRemoveRobot(robot.name)}>
            {/* Her bir robot kartı */}
            <img src={robot.img} alt={robot.name} />
            <span>{robot.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
