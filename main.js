window.addEventListener('load', () => {
	const form = document.querySelector("#new-goal-form");
	const input = document.querySelector("#new-goal-input");
	const goalsDiv = document.querySelector("#goals");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

        if(!input.value) {
            alert("Provide a description of your goal in the textfield");
            return;
        }

        const goalDiv = document.createElement("div");
        goalDiv.classList.add("goal");

        const contentDiv = document.createElement("div"); // create me
        contentDiv.classList.add("content"); // style me 

        goalDiv.appendChild(contentDiv); // input data

        const goalInput = document.createElement("input")
        goalInput.classList.add("text");
        goalInput.type = "text";
        goalInput.value = input.value;
        goalInput.setAttribute("readonly", "true");

        contentDiv.appendChild(goalInput);
        
        const actionsDiv = document.createElement("div");
        actionsDiv.classList.add("actions");

        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.innerHTML = "Edit";

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerHTML = "Delete";

        actionsDiv.appendChild(editButton);
        actionsDiv.appendChild(deleteButton);

        goalDiv.appendChild(actionsDiv);

        goalsDiv.appendChild(goalDiv);

        input.value = "";

        editButton.addEventListener("click", () => {
            if(editButton.innerText.toLowerCase() == "edit") {
                goalInput.removeAttribute("readonly");
                goalInput.focus(); // put cursor where it needs to be
                editButton.style.color = "blue";
                editButton.innerText = "Save";
            } else {
                goalInput.setAttribute("readonly", "readonly");
                editButton.innerText = "Edit";
            }
        });

        deleteButton.addEventListener("click", () => {
            goalsDiv.removeChild(goalDiv); 
        });
	});
});