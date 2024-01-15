

const Avatar = ({userId,username}) => {
    const colors = ['bg-teal-400', 'bg-red-400',
                  'bg-green-400', 'bg-purple-400',
                  'bg-blue-400', 'bg-yellow-400',
                  'bg-orange-400', 'bg-pink-400', 'bg-fuchsia-400', 'bg-rose-400'];
                  const userIdBase10 = parseInt(userId.substring(10), 16);
                  const colorIndex = userIdBase10 % colors.length;
                  const color = colors[colorIndex];
    return (
        <div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center uppercase font-bold ${color}`}>
                {username[0]}
            </div>
        </div>
    );
};

export default Avatar;