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
            ]
        }
    },
    methods: {
        nounClicked(){
            alert("a")
        },
      
    },

   
   

})