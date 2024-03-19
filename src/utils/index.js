
    function getTimeAgo(createdAt) {
        const currentDate = new Date();
        const createdAtDate = new Date(createdAt);

        const timeDifference = currentDate - createdAtDate;
        const secondsDifference = Math.floor(timeDifference / 1000);

        if (secondsDifference < 60) {
            return `${secondsDifference} second${secondsDifference !== 1 ? 's' : ''} ago`;
        }

        const minutesDifference = Math.floor(secondsDifference / 60);
        if (minutesDifference < 60) {
            return `${minutesDifference} minute${minutesDifference !== 1 ? 's' : ''} ago`;
        }

        const hoursDifference = Math.floor(minutesDifference / 60);
        if (hoursDifference < 24) {
            return `${hoursDifference} hour${hoursDifference !== 1 ? 's' : ''} ago`;
        }

        const daysDifference = Math.floor(hoursDifference / 24);
        return `${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago`;
    }


export { getTimeAgo };