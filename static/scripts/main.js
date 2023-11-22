//Initiate jQuery on load.
$(function() {
    //Translate text with flask route
    $("#TextGene").on("click", function(e) {
        e.preventDefault();

        var TextGeneVal = document.getElementById("text-prefix").value;
        var TextGeneLen = document.getElementById("text-length").value;
        var TextGeneModel = document.getElementById("model").value;
        var TextGeneRes = { 'text': TextGeneVal ,'len': TextGeneLen,'model': TextGeneModel};

        if (TextGeneVal !== "") {
            $.ajax({
                url: '/TextGene-text',
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                dataType: 'json',
                data: JSON.stringify(TextGeneRes),
                success: function(articles) {
                    $('#result').show();

                    console.log(articles);
                    document.getElementById("generated-result").textContent = articles[0];
            
                }
            });
        };
        
    }); 
});