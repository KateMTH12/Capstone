var ch;
var mic;
var recording;
var clip;
var onOff = false;
var fft;
var f1=0;
var fre = [];
var waveForm;
function setup(){
    createCanvas(400,200);
    mic = new p5.AudioIn();
    mic.start();
    recording = new p5.SoundRecorder();
    recording.setInput(mic);
    clip = new p5.SoundFile();
    fft = new p5.FFT();
    fft.setInput(clip);
}

function draw(){
    background(0);
    fill(0,255,140);
    text("type o to record",50,height/2);
    waveForm = fft.analyze();
    if(onOff === true){
        fill(255,0,0);
        ellipse(width/2,height/2,20,20);
    }
    fill(200,30,180);
    
    stroke(255);

}

function keyTyped(){
    if(key == 'o'){
        if(onOff === false && mic.enabled){
            recording.record(clip);        
            onOff = true;
            print('recording');
            f1 = 0;
        }else{
            onOff = false;
            recording.stop();
            background(255);
        }

    }
    if(key == 'p'){
        clip.play();

    }
    if(key == 'i'){
        for(var j = 0;j<waveForm.length/2;j++){
            fre = shorten(fre);
        }
        waveForm = fft.analyze();

        for(var i =0;i<waveForm.length/2;i++){
        ellipse(map(i,0,1024,0,width),map(waveForm[i],0,255,height,0),5,5);
        fre.push(waveForm[i]*(44100/1024));
    }
        print(fre);
    }
}
/*function mousePressed(){
    clip.play();
}
// document.onkeydown = function(event){
//     var e = event || window.event || arguments.callee.caller.arguments[0];
//     if (e && e.keyCode==13) {
//         ConverterForm.convert('inputText', 'outputText', 'nonIdentifiable');
//     }
//     document.getElementById()
//     //~
//     192
//     //1
//     49
//     //2
//     50
//     //3
//     51
//     //4
//     52
//     //5
//     53
//     //6
//     54
//     //7
//     55
//     //8
//     56
//     //9
//     57
//     //0
//     48
//     //q
//     81
//     //w
//     87
//     //e
//     69
//     //r
//     82
//     //t
//     84
//     //y
//     89
//     //u
//     85
//     //i
//     73
//     //o
//     79
//     //p
//     80
//     //a
//     65
//     //s
//     83
//     //d
//     68
//     //f
//     70
//     //g
//     71
//     //h
//     72
//     //j
//     74
//     //k
//     75
//     //l
//     76
//     //z
//     90
//     //x
//     88
//     //c
//     67
//     //v
//     86
//     //b
//     66
//     //n
//     78
//     //m
//     77
//     if (e && e.keycode==40){
//     }
// }
*/