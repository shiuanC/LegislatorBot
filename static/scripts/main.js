//Initiate jQuery on load.
$(function() {
        //Translate text with flask route
        $(document).ready(function () {
            var senators = {'Mrs. FISCHER': 'DEB FISCHER (R-NE)',
                'Mr. WARNER of Virginia': 'MARK WARNER (D-VA)',
                'Mr. MCCONNELL': 'MITCH MCCONNELL (R-KY)',
                'Mr. DURBIN': 'RICHARD DURBIN (D-IL)',
                'Mr. McCONNELL': 'MITCH MCCONNELL (R-KY)',
                'Mr. HATCH': 'ORRIN HATCH (R-UT)',
                'Mr. LEAHY': 'PATRICK LEAHY (D-VT)',
                'Mrs. FEINSTEIN': 'DIANNE FEINSTEIN (D-CA)',
                'Ms. COLLINS': 'SUSAN COLLINS (R-ME)',
                'Mr. REED': 'JOHN REED (D-RI)',
                'Mr. REID': 'HARRY REID (D-NV)',
                'Mr. MENENDEZ': 'ROBERT MENENDEZ (D-NJ)',
                'Mr. UDALL': 'TOM UDALL (D-NM)',
                'Mr. MERKLEY': 'JEFF MERKLEY (D-OR)',
                'Mr. BLUNT': 'ROY BLUNT (R-MO)',
                'Mr. THUNE': 'JOHN THUNE (R-SD)',
                'Mr. SANDERS': 'BERNARD SANDERS (I-VT)',
                'Mr. CORNYN': 'JOHN CORNYN (R-TX)',
                'Mr. WHITEHOUSE': 'SHELDON WHITEHOUSE (D-RI)',
                'Mr. HOEVEN': 'JOHN HOEVEN (R-ND)',
                'Mr. MANCHIN': 'JOE MANCHIN (D-WV)',
                'Mr. DAINES': 'STEVE DAINES (R-MT)',
                'Mr. BARRASSO': 'JOHN BARRASSO (R-WY)',
                'Ms. MURKOWSKI': 'LISA MURKOWSKI (R-AK)',
                'Ms. HEITKAMP': 'HEIDI HEITKAMP (D-ND)',
                'Mr. ROBERTS': 'PAT ROBERTS (R-KS)',
                'Mr. CARDIN': 'BENJAMIN CARDIN (D-MD)',
                'Mr. MARKEY': 'EDWARD MARKEY (D-MA)',
                'Mr. ALEXANDER': 'LAMAR ALEXANDER (R-TN)',
                'Mr. KING': 'ANGUS KING (I-ME)',
                'Mr. BROWN': 'SHERROD BROWN (D-OH)',
                'Mr. WYDEN': 'RON WYDEN (D-OR)',
                'Mr. CASEY': 'ROBERT CASEY (D-PA)',
                'Mr. SCOTT': 'TIM SCOTT (R-SC)',
                'Mrs. GILLIBRAND': 'KIRSTEN GILLIBRAND (D-NY)',
                'Mr. BURR': 'RICHARD BURR (R-NC)',
                'Mr. BENNET': 'MICHAEL BENNET (D-CO)',
                'Mr. BOOKER': 'CORY BOOKER (D-NJ)',
                'Mr. CRAPO': 'MICHAEL CRAPO (R-ID)',
                'Mr. SCHUMER': 'CHARLES SCHUMER (D-NY)',
                'Mr. COATS': 'DANIEL COATS (R-IN)',
                'Mr. HELLER': 'DEAN HELLER (R-NV)',
                'Ms. STABENOW': 'DEBBIE STABENOW (D-MI)',
                'Ms. WARREN': 'ELIZABETH WARREN (D-MA)',
                'Mr. INHOFE': 'JAMES INHOFE (R-OK)',
                'Mr. COONS': 'CHRIS COONS (D-DE)',
                'Mr. WICKER': 'ROGER WICKER (R-MS)',
                'Mr. COCHRAN': 'THAD COCHRAN (R-MS)',
                'Mr. BLUMENTHAL': 'RICHARD BLUMENTHAL (D-CT)',
                'Mr. NELSON': 'BILL NELSON (D-FL)',
                'Mr. PERDUE': 'DAVID PERDUE (R-GA)',
                'Ms. CANTWELL': 'MARIA CANTWELL (D-WA)',
                'Mr. VITTER': 'DAVID VITTER (R-LA)',
                'Mrs. SHAHEEN': 'JEANNE SHAHEEN (D-NH)',
                'Mr. SCHATZ': 'BRIAN SCHATZ (D-HI)',
                'Mr. SESSIONS': 'JEFFERSON SESSIONS (R-AL)',
                'Mr. KAINE': 'TIMOTHY KAINE (D-VA)',
                'Mr. TOOMEY': 'PATRICK TOOMEY (R-PA)',
                'Mrs. McCASKILL': 'CLAIRE MCCASKILL (D-MO)',
                'Mr. WARNER': 'MARK WARNER (D-VA)',
                'Mrs. BOXER': 'BARBARA BOXER (D-CA)',
                'Mr. BOOZMAN': 'JOHN BOOZMAN (R-AR)',
                'Mr. ISAKSON': 'JOHN ISAKSON (R-GA)',
                'Mr. GRASSLEY': 'CHARLES GRASSLEY (R-IA)',
                'Mrs. MURRAY': 'PATTY MURRAY (D-WA)',
                'Mrs. CAPITO': 'SHELLEY CAPITO (R-WV)',
                'Mr. PORTMAN': 'ROBERT PORTMAN (R-OH)',
                'Mr. CASSIDY': 'BILL CASSIDY (R-LA)',
                'Mr. CARPER': 'THOMAS CARPER (D-DE)',
                'Ms. AYOTTE': 'KELLY AYOTTE (R-NH)',
                'Ms. HIRONO': 'MAZIE HIRONO (D-HI)',
                'Mrs. MCCASKILL': 'CLAIRE MCCASKILL (D-MO)',
                'Mr. FRANKEN': 'ALAN FRANKEN (D-MN)',
                'Mr. MURPHY': 'CHRISTOPHER MURPHY (D-CT)',
                'Ms. MIKULSKI': 'BARBARA MIKULSKI (D-MD)',
                'Mr. CORKER': 'BOB CORKER (R-TN)',
                'Mr. SHELBY': 'RICHARD SHELBY (R-AL)',
                'Ms. KLOBUCHAR': 'AMY KLOBUCHAR (D-MN)',
                'Mr. LEE': 'MIKE LEE (R-UT)',
                'Mr. GRAHAM': 'LINDSEY GRAHAM (R-SC)',
                'Mr. TILLIS': 'THOM TILLIS (R-NC)',
                'Mr. MCCAIN': 'JOHN MCCAIN (R-AZ)',
                'Mr. MORAN': 'JERRY MORAN (R-KS)',
                'Mr. ENZI': 'MICHAEL ENZI (R-WY)',
                'Mr. HEINRICH': 'MARTIN HEINRICH (D-NM)',
                'Mr. TESTER': 'JON TESTER (D-MT)',
                'Mr. FLAKE': 'JEFF FLAKE (R-AZ)',
                'Mr. CRUZ': 'TED CRUZ (R-TX)',
                'Mr. JOHNSON': 'RON JOHNSON (R-WI)',
                'Mr. PETERS': 'GARY PETERS (D-MI)',
                'Mr. SULLIVAN': 'DAN SULLIVAN (R-AK)',
                'Mr. COTTON': 'TOM COTTON (R-AR)',
                'Ms. FEINSTEIN': 'DIANNE FEINSTEIN (D-CA)',
                'Mr. ROUNDS': 'MIKE ROUNDS (R-SD)',
                'Ms. BALDWIN': 'TAMMY BALDWIN (D-WI)',
                'Mr. RISCH': 'JAMES RISCH (R-ID)',
                'Ms. HEITIKAMP': 'HEIDI HEITKAMP (D-ND)',
                'MR. HATCH': 'ORRIN HATCH (R-UT)',
                'Mr. PAUL': 'RAND PAUL (R-KY)',
                'Mr. RUBIO': 'MARCO RUBIO (R-FL)',
                'Mr. KIRK': 'MARK KIRK (R-IL)',
                'MER. DURBIN': 'RICHARD DURBIN (D-IL)',
                'MER. GILLIBRAND': 'KIRSTEN GILLIBRAND (D-NY)',
                'Mr. DONNELLY': 'JOE DONNELLY (D-IN)',
                'Mr. McCAIN': 'JOHN MCCAIN (R-AZ)',
                'Ms. JACKSON LEE': 'MIKE LEE (R-UT)',
                'Mr. REID of Nevada': 'HARRY REID (D-NV)',
                'Mrs. ERNST': 'JONI ERNST (R-IA)',
                'Mr. GARDNER': 'CORY GARDNER (R-CO)',
                'Mr. SASSE': 'BENJAMIN SASSE (R-NE)',
                'ER. RUBIO': 'MARCO RUBIO (R-FL)',
                'Ms. JASMINE MURRAY': 'PATTY MURRAY (D-WA)',
                'Ms. MURRAY': 'PATTY MURRAY (D-WA)',
                'Mr. LANKFORD': 'JAMES LANKFORD (R-OK)',
                'Mrs. STABENOW': 'DEBBIE STABENOW (D-MI)',
                'Mr. MCOAIN': 'JOHN MCCAIN (R-AZ)',
                'Mr. MENENDEz': 'ROBERT MENENDEZ (D-NJ)',
                'Mrs. PATTY MURRAY': 'PATTY MURRAY (D-WA)',
                'Mr. REEDS': 'JOHN REED (D-RI)',
                'Ms. EDDIE BERNICE JOHNSON of Texas': 'RON JOHNSON (R-WI)',
                'MS. COLLINS': 'SUSAN COLLINS (R-ME)',
                'Ms. TLOBUCHAR': 'AMY KLOBUCHAR (D-MN)',
                'Mr. BRIAN ROBERTS': 'PAT ROBERTS (R-KS)',
                'Ms. MCCASKILL': 'CLAIRE MCCASKILL (D-MO)',
                'Mr. PAUL. Often': 'RAND PAUL (R-KY)',
                'Mr. PAUL. Of Bowling': 'RAND PAUL (R-KY)',
                'Mr. COLLINS': 'SUSAN COLLINS (R-ME)',
                'Mr. MARTIN SHKRELI': 'MARTIN HEINRICH (D-NM)',
                'Ms. MURKOWKSI': 'LISA MURKOWSKI (R-AK)',
                'Mrs. CANTWELL': 'MARIA CANTWELL (D-WA)',
                'MS. KLOBUCHAR': 'AMY KLOBUCHAR (D-MN)',
                'Mr. DURBN': 'RICHARD DURBIN (D-IL)',
                'Mr. INHOFES': 'JAMES INHOFE (R-OK)',
                'Mr.VITTER': 'DAVID VITTER (R-LA)',
                'Mr. BENNETT': 'MICHAEL BENNET (D-CO)',
                'Mr. MCGONNELL': 'MITCH MCCONNELL (R-KY)'
            }
           
            $.each(senators, function (key, value) {
                $('#speaker').append($('<option>', {
                    value: key,
                    text: value
                }));
            });
        });
    //Translate text with flask route
    $("#TextGene").on("click", function(e) {
        e.preventDefault();

        var TextGeneVal = document.getElementById("speaker").value;
        var TextGeneLen = document.getElementById("articleLength").value;
        var TextGeneRes = { 'prompt': TextGeneVal ,'len': TextGeneLen};

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
                    document.getElementById("generated-result").textContent = articles;
            
                }
            });
        };
        
    }); 
});