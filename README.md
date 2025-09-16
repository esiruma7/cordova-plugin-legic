# cordova-plugin-legic

Cordova plugin wrapper for the LEGIC Connect SDK, packaged for OutSystems MABS.

## Installation
In OutSystems Extensibility Configurations:

```json
{
  "plugin": {
    "url": "https://github.com/<your-user>/cordova-plugin-legic.git#main"
  }
}
```

## Usage
After installation, you can call the plugin from JavaScript:

```javascript
Legic.echo("Hello", function(msg) {
  console.log("Success:", msg);
}, function(err) {
  console.error("Error:", err);
});
```
