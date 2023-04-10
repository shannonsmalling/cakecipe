const Redvelvet = () => {
    const [currentCount, updateCount] = useState(18)
    function decreaseCount() {
        // function to update previous count with decremented value
        updateCount(previousCount => previousCount -1)
       }
        // function to increment count
        function increaseCount() {
            // function to update previous count with incremented value
            updateCount(previousCount => previousCount +1) 
        }