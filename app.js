new Vue({
    el: "#app",
  
    data() {
        return {
            partofspeech: [
                'NOUN :   naming word',
                'PRONOUN : replaces noun',
                'VERB : action denoting word',
                'ADJECTIVE :qualifies a noun/pronoun ',
                'ADEVRB : qualifies a verb',
                'PREPOSITION : relating word ',
                'CONJUCTION : connectig word',
                'INTERJECTION: Sudden Feeling Expression'
            ],
           daySwitch:''
        }
    },
    methods: {
        day1clicked(){
           document.location.href='../index.html';
        },
        day2clicked(){
            document.location.href='../day2.html';
        }
      
    },

   
   

})