export const addRewards = (jsonAwards) => {
    const awardsArr = []
    jsonAwards.awards.forEach(award => {
        for (let i = 0; i < award.count; i++){
            awardsArr.push({
                "option": award.name,
                "style": {
                    "backgroundColor": award.backgroundColor,
                    "textColor": award.textColor
                }

        })
        }
    });
    return awardsArr
}