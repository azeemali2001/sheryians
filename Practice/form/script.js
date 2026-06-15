const form = document.querySelector(".form");
const inp1 = document.querySelector("#name");
const inp2 = document.querySelector("#about");
const inp3 = document.querySelector("#img");
const cardContainer = document.querySelector(".cardContainer");
const submitBtn = document.querySelector("#submitBtn");

let editIndex = null;

const users = [
    {
        name: "Sarah Johnson",
        about: "UI/UX Designer passionate about creating intuitive and accessible digital experiences.",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
        name: "Michael Chen",
        about: "Backend Engineer specializing in scalable microservices and cloud infrastructure.",
        imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
    },
    {
        name: "Priya Sharma",
        about: "Product Manager focused on building customer-centric products and agile teams.",
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    },
    {
        name: "David Wilson",
        about: "Data Scientist who loves machine learning, analytics, and solving business problems.",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
];

const render = () => {
    cardContainer.innerHTML = "";
    users.forEach((user, index) => {
        cardContainer.innerHTML += `<div class="card">
            <img src=${user.imageUrl} alt="Image">
            <div class="content">
                <h1>${user.name}</h1>
                <p>${user.about}</p>
            </div>
            <div class="util">
                <button id="edit" onClick="handleEdit(${index})" style="background-color: orange;">Edit</button>
                <button id="del" onClick="handleDel(${index})" style="background-color: red;">Delete</button>
            </div>
        </div>`
    })
}

render();


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = inp1.value;
    const about = inp2.value;
    const file = inp3.files[0];
    if (!name.trim() || !about.trim()) return;



    if (editIndex !== null) {
        users[editIndex].name = name;
        users[editIndex].about = about;

        if (file) {
            users[editIndex].imageUrl = URL.createObjectURL(file);
        }

        editIndex = null;

        submitBtn.textContent = "Submit"
        submitBtn.style.backgroundColor = "royalblue"
    } else {
        const imageUrl = URL.createObjectURL(file);
        users.push({
            name,
            about,
            imageUrl
        })
    }

    render();
    form.reset();
})


handleDel = (idx) => {
    users.splice(idx, 1);
    render();
}

handleEdit = (idx) => {
    console.log("Edit clicked", users[idx]);
    editIndex = idx;

    inp1.value = users[idx].name;
    inp2.value = users[idx].about;

    submitBtn.textContent = "Edit"
    submitBtn.style.backgroundColor = "orange"
}

