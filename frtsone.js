   .code
  {
    border: 1px solid #E0E0E0;
    padding: 1px;
    margin: 0 1ex;
    overflow: hidden;

    font-family: Consolas, monospace;
    font-size: 100%;
    color: black;
    line-height: 1.4em;
    white-space: pre;   
  }

  .line
  {
    position: relative; 
    
    zoom: 1;            
    white-space: pre;   
  }

  .even
  {
    background: #F8F8F8;
  }
  .odd
  {
    background: #F0F0F0;
  }

  .lineNumber
  {
    display: block;
    position: absolute;
    left: 0;

    padding: 0 .5ex;
    margin: 0;
    width: 6ex;
    line-height: 1.4em;
    height: 1.4em;

    background: none;
    border: none;
    font-family: Consolas, monospace;
    font-size: 100%;
    text-align: right;
    color: #666;

      -moz-user-select: none;    
      
      -webkit-user-select: none;
    user-select: none;
    pointer-events: none;        
    
  }
  .over
  {
    display: block;
    position: absolute;
    left: 0;
    width: 7ex;
    height: 1.4em;
    z-index: 1;
    background: url(.);          
  }

  .lineContent
  {
    margin-left: 7ex;
    padding-left: 2ex;
    border-left: 2px solid #33BB66;
    display: block;
    white-space: pre-wrap;      
  }

  .token-string
  {
    color: blue;
  }
  .token-comment 
  {
    color: #008200;
  }
  .token-keyword
  {
    color: #006699;
    font-weight: bold;
  }
