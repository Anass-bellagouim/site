var posts = [
    ["img/111.jpg", "https://youtu.be/0S5uDbenoiw?si=q6t19OzoTG0aeVuw", "مبادرة لدعم اشباب - الحكم بسجن - الدستور المغربي - الإدارات او الامن و الوزراء خدامين عند المواطن"],
    ["img/222.jpg", "https://youtu.be/UXGEURExVhI?si=KMcGXV8qAtT6hUI6", "لمصاحبة وشرع - الاسرة و الرأسمالية -الزواج الناجح - لمطلقة والمجتمع -لفلوس ديال الله - شباب و الفتن"],
    ["img/333.jpg", "https://youtu.be/fCjTnzPRt2s?si=Z0Qj07B0I7_NS2dS", "نسويات مكيدخلوش سوق راسهم - الياس مشي شيخ - استغلال اطفال للجندرية - زواج بموظفة - اعتذار لسدراتي"],
    ["img/444.jpg", "https://youtu.be/IrsQWATqo_Q?si=PbOuqq99IrFYMf1e", "الكريدي 0% مكينش - قانون الشغل - كفاش تعرف القانون ديالك - تغطية صحية L’AMO- مع اسماعيل فهاماطو"],
    ["img/555.jpg", "https://youtu.be/FmVDVzAVn7c?si=VA0srDjAW0vl6yuL", "عدم فهم المال سبب الفقر ـ متزوجش دابا ـ طبقة متوسطة والمظاهر ـ سوس و لفلوس ـ ها شخصك باش تفهم المال"],
    ["img/666.jpg", "https://youtu.be/Pet8J3S1JWc?si=vjsscAH4hNAOYIbD", "بودكاست مئة مع | ذ حمزة الخالدي"],
]
console.log(posts)

var content = document.getElementById("content")
posts.forEach(post =>{
    content.innerHTML = content.innerHTML + 
    `<article> 
    <a href="${post[1]}">
    <h2> ${post[2]} </h2>
    <img src="${post[0]}" /> </a> 

    </article>`
})