const{Composite,TextView,contentView, TextInput, Button} = require("tabris");

const headerComposite = new Composite({ top: 0, left: 0, right: 0, height: 57}).appendTo(contentView);
const headerViewTitle = new TextView({ centerY: 0, left: ['prev()', 5], right: 30, textColor: "gray", text: "Test", font: 'bold 17px' }).appendTo(headerComposite);
const searchCountry = new TextView({ centerY: 0, right: 15, textColor:"gray", text:"create input"})
.onTap(({ target }) => {
    target.dispose()
    new TextInput({ width:200, centerY: 0, right: 5, message: "This is a test", style: 'none', floatMessage: false,  background: 'transparent', focused: true}).appendTo(headerComposite);
}).appendTo(headerComposite);

