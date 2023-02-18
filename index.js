const nums = {
    0: [1, 1, 1, 0, 1, 1, 1],
    1: [0, 0, 1, 0, 0, 1, 0],
    2: [1, 0, 1, 1, 1, 0, 1],
    3: [1, 0, 1, 1, 0, 1, 1],
    4: [0, 1, 1, 1, 0, 1, 0],
    5: [1, 1, 0, 1, 0, 1, 1],
    6: [1, 1, 0, 1, 1, 1, 1],
    7: [1, 0, 1, 0, 0, 1, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1],
}

const timer = () => {
    const date = new Date();
    const hours = date.getHours();
    const mins = date.getMinutes();
    const secs = date.getSeconds();
    const hoursFirst = Math.floor(hours/10);
    const hoursSecond = hours%10;
    const minsFirst = Math.floor(mins/10);
    const minsSecond = mins%10;
    const secsFirst = Math.floor(secs/10);
    const secsSecond = secs%10;
    nums[hoursFirst].forEach((num, idx) => {
        const el = document.getElementById(`hours_first_${idx}`);
        if(num === 1) el.classList.remove('hide');
        else el.classList.add('hide');
    });
    nums[hoursSecond].forEach((num, idx) => {
        const el = document.getElementById(`hours_second_${idx}`);
        if(num === 1) el.classList.remove('hide');
        else el.classList.add('hide');
    });
    nums[minsFirst].forEach((num, idx) => {
        const el = document.getElementById(`minutes_first_${idx}`);
        if(num === 1) el.classList.remove('hide');
        else el.classList.add('hide');
    });
    nums[minsSecond].forEach((num, idx) => {
        const el = document.getElementById(`minutes_second_${idx}`);
        if(num === 1) el.classList.remove('hide');
        else el.classList.add('hide');
    });
    nums[secsFirst].forEach((num, idx) => {
        const el = document.getElementById(`seconds_first_${idx}`);
        if(num === 1) el.classList.remove('hide');
        else el.classList.add('hide');
    });
    nums[secsSecond].forEach((num, idx) => {
        const el = document.getElementById(`seconds_second_${idx}`);
        if(num === 1) el.classList.remove('hide');
        else el.classList.add('hide');
    });
}

setInterval(timer, 1000);