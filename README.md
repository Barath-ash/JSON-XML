 # 📄 JSON to XML Converter (Web-Based)

This project is a browser-based tool that allows users to paste JSON input, convert it into structured XML based on strict type-based rules, and download the result as an .xml file.

 🌐 Live Features
- Paste or edit JSON directly in the browser.
- Converts data to XML using type-based mapping:
  - Strings → <string>
  - Numbers → <number>
  - Booleans → <boolean>
  - null → <null/>
  - Arrays → <array>...</array>
  - Objects → <object name="key">...</object>
- Output is formatted using vkbeautify.
- Option to download the XML file directly from the browser.

 🛠 How It Works

# 💻 Technologies Used
- HTML, CSS, JavaScript (ES6+)
- vkbeautify (CDN) – for pretty XML formatting

# 📁 Files
| File | Description |
|------|-------------|
| index.html | Main UI for input and output |
| convertor.js | Logic for recursively converting JSON to XML |
| vkbeautify.js | Beautifies raw XML output (CDN or optional local copy) |

 🚀 How to Use

1. Open index.html in a modern browser.
2. Paste valid JSON into the text area.
3. Click "Convert".
4. View the XML result in the preview box.
5. Click "Download XML" to save the output.

 📦 Example

# Input:
json
{
  "name": "Barath",
  "age": 22,
  "skills": ["React", "Node"],
  "profile": null,
  "verified": true
}


# Output:
xml
<object>
  <string name="name">Barath</string>
  <number name="age">22</number>
  <array name="skills">
    <string>React</string>
    <string>Node</string>
  </array>
  <null name="profile"/>
  <boolean name="verified">true</boolean>
</object>


 📥 Download Output

After converting, click the Download XML button to download the generated output.xml file.

 📌 Notes

- This tool works completely offline (no server needed).
- Built for use in the browser (not Node.js).
- XML tags follow strict typing rules as per the assignment spec.

 🙌 Author

Made by Barath D  
For the Securin JSON to XML Assessment  
 
