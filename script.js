$(document).ready(function(){
	//---------------menampilkan gambar------------------
	$("div.hantu").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/hantu.jpg")',
		});
	});

	$("div.merak").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/merak.jpg")',
		});
	});

	$("div.pipit").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/pipit.jpg")',
		});
	});

	$("div.singa").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/singa.jpg")',
		});
	});

	$("div.serigala").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/serigala.jpg")',
		});
	});

	$("div.gorilla").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/gorilla.jpg")',
		});
	});

	$("div.sapi").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/sapi.jpg")',
		});
	});

	$("div.kambing").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/kambing.jpg")',
		});
	});

	$("div.ayam").click(function(){
		$(this).css({
		   'background-color' : 'white',
		   'border' : '1px solid blue',
		   'background-image' : 'url("images/ayam.jpg")',
		});
	});

	//---------------menampilkan suara------------------
	var currentPlay = null;

        function playAudio(fileAudio) {
            if (currentPlay !== null) {
                currentPlay.pause();
                currentPlay.currentTime = 0;
            }

            currentPlay = new Audio(fileAudio);
            currentPlay.volume = 0.5;
            currentPlay.play();
        }

        $("div.hantu").click(function(){
            playAudio('audio/suara-burung-hantu.mp3');
        });

        $("div.merak").click(function(){
            playAudio('audio/suara-burung-merak.mp3');
        });

        $("div.pipit").click(function(){
            playAudio('audio/suara-burung-pipit.mp3');
        });

        $("div.singa").click(function(){
            playAudio('audio/suara-singa.mp3');
        });

        $("div.serigala").click(function(){
            playAudio('audio/suara-serigala.mp3');
        });

        $("div.gorilla").click(function(){
            playAudio('audio/suara-gorilla.mp3');
        });

        $("div.sapi").click(function(){
            playAudio('audio/suara-sapi.mp3');
        });

        $("div.kambing").click(function(){
            playAudio('audio/suara-kambing.mp3');
        });

        $("div.ayam").click(function(){
            playAudio('audio/suara-ayam.mp3');
        });
	
});
