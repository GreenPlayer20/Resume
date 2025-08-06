document
  .querySelector("#contact form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message!");
    this.reset();
  });

document
  .querySelector("#comments form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("commentName").value.trim();
    const comment = document.getElementById("commentText").value.trim();
    if (name && comment) {
      const commentList =
        document.getElementById("commentList") || createCommentList();
      const newComment = document.createElement("div");
      newComment.className = "mb-2 p-2 border rounded";
      newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
      commentList.appendChild(newComment);
      this.reset();
    }
  });

function createCommentList() {
  const section = document.getElementById("comments");
  const commentList = document.createElement("div");
  commentList.id = "commentList";
  section.appendChild(commentList);
  return commentList;
}

document
  .getElementById("downloadResume")
  .addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Adams Rhey N. Bognot", 10, 20);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Aspiring Game Developer", 10, 30);

    doc.setFontSize(14);
    doc.text("About Me:", 10, 45);
    doc.setFontSize(12);
    doc.text(
      "I'm a passionate game developer with a keen interest in creating immersive gaming experiences. I enjoy coding, designing, and bringing ideas to life through games. My goal is to contribute to innovative projects that push the boundaries of interactive entertainment.",
      10,
      52,
      { maxWidth: 190 }
    );

    doc.setFontSize(14);
    doc.text("Education:", 10, 75);
    doc.setFontSize(12);
    doc.text(
      [
        "- Santa Rosa Elementary School - 2013",
        "- God's Grace Christian Academy - 2020",
        "- Precious High Academy - 2022 (Information and Communications Technology)",
        "- Dominican College of Tarlac - 2022 (Bachelor of Science in Information Technology)",
      ],
      10,
      82
    );

    doc.setFontSize(14);
    doc.text("Skills:", 10, 110);
    doc.setFontSize(12);
    doc.text("HTML, CSS, JavaScript, Java, Python, C#", 10, 117);

    doc.setFontSize(14);
    doc.text("Projects or Experience:", 10, 130);
    doc.setFontSize(12);
    doc.text(
      "- SAD Project - Created a Hotel Management System using HTML, CSS, and JavaScript",
      10,
      137
    );

    doc.save("Adams_Rhey_N_Bognot_Resume.pdf");
  });
