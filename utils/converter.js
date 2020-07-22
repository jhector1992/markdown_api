var Converter = {
    markdown: {
        '#':    '<h1>REP</h1>',
        '##':   '<h2>REP</h2>',
        '###':  '<h3>REP</h3>'
    },

    markdownToHtml: function (markdown){
        var html = '';
        var lines = markdown.split('\n');

        for(let line of lines){
            let tag = line.split(' ')[0];
            console.log(line);
            console.log('TAG: ' + tag);
            console.log('LINE: ' + this.markdown[tag]);
            html += this.markdown[tag].replace('REP', line.replace(tag, '')) + '\n';
        }

        return html;
    }
}




module.exports = Converter;