var MyConnection= draw2d.Connection.extend({
    init:function(attr)
    {
      this._super(attr);
      this.setTargetDecorator(new draw2d.decoration.connection.ArrowDecorator()); 
    //   this.setRouter(new draw2d.layout.connection.InteractiveManhattanConnectionRouter());
      this.setRadius(20);
      this.label = new draw2d.shape.basic.Label({
        text:"Label",
        color:"#0d0d0d",
        fontColor:"#0d0d0d",
        bgColor:"#f0f0f0"
    });
    
    this.add(this.label, new draw2d.layout.locator.ManhattanMidpointLocator());
    
    this.label.installEditor(new draw2d.ui.LabelInplaceEditor());
    },
})