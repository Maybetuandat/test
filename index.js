function render() {
    document.getElementById('question-information').style.display = 'block';
    document.getElementById('question-container').style.display = 'block';
    document.getElementById('confirm-btn').style.display = 'none';

    //check-answer-box
    var quesInfor = document.getElementById('grid');

    for (var i = 1; i <= 4; i++) {
        var gridDiv = document.createElement('div');
        gridDiv.classList.add('row');
        gridDiv.id = 'row' + i;

        for (var j = 1; j <= 10; j++) {
            var cell = document.createElement('div');
            cell.classList.add('grid-item');

            cell.name = (10 * (i - 1) + (j));
            cell.id = 'g' + cell.name;
            cell.textContent = (10 * (i - 1) + (j));

            cell.onclick = function () {
                // console.log(this.name);
                scrollToQuestion(this.name);
            }
            gridDiv.appendChild(cell);
        }
        quesInfor.appendChild(gridDiv);
    }


    //question-container
    //part1:
    var part1 = document.getElementById('part-1');
    for (var i = 1; i <= 10; i++) {
        var content = document.createElement('div');
        content.classList.add('content');
        content.id = i;

        var question = document.createElement('div');
        question.classList.add('question');
        question.textContent = 'Câu ' + i + ':';

        var answer = document.createElement('div');
        answer.classList.add('answer');

        for (var j = 1; j <= 2; j++) {
            var tmp = document.createElement('div');
            tmp.classList.add('true-or-false');
            tmp.classList.add('c-' + i);
            if (j == 1) {
                tmp.textContent = 'Đúng';
            }
            else {
                tmp.textContent = 'Sai';
            }
            tmp.onclick = function () {
                Choose(this);
            }
            answer.appendChild(tmp);
        }
        content.appendChild(question);
        content.appendChild(answer);
        part1.appendChild(content);
    }

    //part2
    var part2 = document.getElementById('part-2');
    for (var i = 11; i <= 20; i++) {
        var content = document.createElement('div');
        content.classList.add('content');
        content.id = i;

        var question = document.createElement('div');
        question.classList.add('question');
        question.textContent = 'Câu ' + i + ':';

        var answer = document.createElement('div');
        answer.classList.add('answer');

        for (var j = 1; j <= 4; j++) {
            var tmp = document.createElement('div');
            tmp.classList.add('answer-selection');
            tmp.classList.add('c-' + i);

            tmp.textContent = String.fromCharCode(64 + j);

            tmp.onclick = function () {
                Choose(this);
            }
            answer.appendChild(tmp);
        }
        content.appendChild(question);
        content.appendChild(answer);
        part2.appendChild(content);
    }

    //part3

    var part3 = document.getElementById('part-3');
    for (var i = 21; i <= 30; i++) {
        var content = document.createElement('div');
        content.classList.add('content');
        content.id = i;

        var question = document.createElement('div');
        question.classList.add('question');
        question.textContent = 'Câu ' + i + ':';

        var answer = document.createElement('div');
        answer.classList.add('answer');

        for (var j = 1; j <= 4; j++) {
            var tmp = document.createElement('div');
            tmp.classList.add('answer-selection');
            tmp.classList.add('c-' + i);

            tmp.textContent = String.fromCharCode(64 + j);

            tmp.onclick = function () {
                MultiChoose(this);
            }
            answer.appendChild(tmp);
        }
        content.appendChild(question);
        content.appendChild(answer);
        part3.appendChild(content);
    }

    // part4
    var part4 = document.getElementById('part-4');
    for (var i = 31; i <= 40; i++) {
        var content = document.createElement('div');
        content.classList.add('content');
        content.id = i;

        var question = document.createElement('div');
        question.classList.add('question');
        question.textContent = 'Câu ' + i + ':';

        var answer = document.createElement('div');
        answer.classList.add('answer');

        var input = document.createElement('textarea');
        input.cols = 70;
        input.rows = 3;
        input.id = 'c-' + i;
        input.onchange = function () {
            changeInput(this.id);
        }
        answer.appendChild(input);

        content.appendChild(question);
        content.appendChild(answer);
        part4.appendChild(content);
    }
}

