let sendBtn = document.getElementById('sendBtn');
let textbox = document.getElementById('textbox');
let chatContainer = document.getElementById('chatContainer');

var user = {message:""};

function getDate() {
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let dayOfMonth = date.getDate();

    let dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    // return dayArray[day] + ", " + monthArray[month] + " " + dayOfMonth;
    return `${dayArray[day]}, ${monthArray[month]} ${dayOfMonth}`;
}

var arrayOfPossibleMessages = [
    {"message":"how are you?", "response":"I'm okay!"},
    {"message":"hi", "response":"hi!"},
    {"message":"hello", "response":"hello!"},
    {"message":"today's date", "response":getDate()},
    {"message":"date today", "response":getDate()},
    {"message":"what is today's date", "response":getDate()},
    {"message":"what's today's date", "response":getDate()},
    {"message":"what's date today", "response":getDate()},
    {"message":"what is the date today", "response":getDate()},
    {"message":"what's the date today", "response":getDate()},
    {"message":"the date today is what", "response":getDate()},
    {"message":"what is my name?", "response":"How can I possibly know that? 😅"},
    {"message":"what's my name?", "response":"I'm not a clairvoyant. I'm just a chatbot that is still in the process of learning. 😅"},
    {"message":"who are you?", "response":"Technically, I don't have a name, but I can assistant you."},
    {"message":"what's your name?", "response":"They call me Root. I'm a chatbot!"},
    {"message":"what is your name?", "response":"I'm a chatbot!"},
    {"message":"how old are you?", "response":"You can assume that I'm ageless."},
    {"message":"what is reformed theology?", "response":"Broadly speaking, Reformed theology includes any system of belief that traces its roots back to the Protestant Reformation of the 16th Century. Of course, the Reformers themselves traced their doctrine to Scripture, as indicated by their credo of 'sola scriptura,' so Reformed theology is not a 'new' belief system but one that seeks to continue apostolic doctrine."},
    {"message":"what's reformed theology?", "response":"Generally, Reformed theology holds to the authority of Scripture, the sovereignty of God, salvation by grace through Christ, and the necessity of evangelism. It is sometimes called Covenant theology because of its emphases on the covenant God made with Adam and the new covenant which came through Jesus Christ (Luke 22:20)."},
    {"message":"what is biblical christianity?", "response":"Refer to our article thru this link - <a href='https://codenimus.github.io/KodegoProjects/christianity212.html'>Christianity 212</a>"},
    {"message":"what is christianity?", "response":"Refer to our article thru this link - <a href='https://codenimus.github.io/KodegoProjects/christianity212.html'>Christianity 212</a>"},
    {"message":"what is salvation?", "response":"Refer to our article thru this link - <a href='https://codenimus.github.io/KodegoProjects/salvation.html'>Order of Salvation</a>"},
    {"message":"what is systematic theology?", "response":"'Systematic' refers to something being put into a system. Systematic theology is, therefore, the division of theology into systems that explain its various areas. For example, many books of the Bible give information about the angels. No one book gives all the information about the angels. Systematic theology takes all the information about angels from all the books of the Bible and organizes it into a system called angelology. That is what systematic theology is all about—organizing the teachings of the Bible into categorical systems. Please refer to our article using this link - <a href='https://codenimus.github.io/KodegoProjects/systematic-theology.html'>Systematic Theology in a Nutshell</a>"},
    {"message":"what is love?", "response":"A healthy definition of love is crucial to understanding the central message of the Bible. According to the Bible, love is not confined to sexuality, and it isn't primarily a feeling either. The Bible teaches that love is a commitment. As a commitment, love is not dependent on good feelings but rather on a consistent and corageous decision to extend oneself for the well-being of another. That commitment then produces good feelings, not the other way around. Jesus became the perfect demonstration of God's unconditional love for His people by laying down His life for the benefit of the 'elect.'"},
    {"message":"what's love?", "response":"A healthy definition of love is crucial to understanding the central message of the Bible. According to the Bible, love is not confined to sexuality, and it isn't primarily a feeling either. The Bible teaches that love is a commitment. As a commitment, love is not dependent on good feelings but rather on a consistent and corageous decision to extend oneself for the well-being of another. That commitment then produces good feelings, not the other way around. Jesus became the perfect demonstration of God's unconditional love for His people by laying down His life for the benefit of the 'elect.'"},
    {"message":"who is god?", "response":"The fact of God's existence is so conspicuous, both through creation and through man's conscience, that the Bible calls the atheist a 'fool' <a href='https://biblia.com/bible/esv/psalm/14/1' target='_blank' rel='noopener noreferrer'>(Psalm 14:1)</a>. Accordingly, the Bible never attempts to prove the existence of God; rather, it assumes His existence from the very beginning <a href='https://biblia.com/bible/esv/genesis/1/1' target='_blank' rel='noopener noreferrer'>(Genesis 1:1)</a>. What the Bible does is reveal the nature, character, and work of God."},
    {"message":"who's god?", "response":"theThe fact of God's existence is so conspicuous, both through creation and through man's conscience, that the Bible calls the atheist a 'fool' <a href='https://biblia.com/bible/esv/psalm/14/1' target='_blank' rel='noopener noreferrer'>(Psalm 14:1)</a>. Accordingly, the Bible never attempts to prove the existence of God; rather, it assumes His existence from the very beginning <a href='https://biblia.com/bible/esv/genesis/1/1' target='_blank' rel='noopener noreferrer'>(Genesis 1:1)</a>. What the Bible does is reveal the nature, character, and work of God."},
    {"message":"what's god?", "response":"The right question is <em>'Who is God?'</em> - The fact of God's existence is so conspicuous, both through creation and through man's conscience, that the Bible calls the atheist a 'fool' <a href='https://biblia.com/bible/esv/psalm/14/1' target='_blank' rel='noopener noreferrer'>(Psalm 14:1)</a>. Accordingly, the Bible never attempts to prove the existence of God; rather, it assumes His existence from the very beginning <a href='https://biblia.com/bible/esv/genesis/1/1' target='_blank' rel='noopener noreferrer'>(Genesis 1:1)</a>. What the Bible does is reveal the nature, character, and work of God."},
    {"message":"what is god?", "response":"The right question is <em>'Who is God?'</em> - The fact of God's existence is so conspicuous, both through creation and through man's conscience, that the Bible calls the atheist a 'fool' <a href='https://biblia.com/bible/esv/psalm/14/1' target='_blank' rel='noopener noreferrer'>(Psalm 14:1)</a>. Accordingly, the Bible never attempts to prove the existence of God; rather, it assumes His existence from the very beginning <a href='https://biblia.com/bible/esv/genesis/1/1' target='_blank' rel='noopener noreferrer'>(Genesis 1:1)</a>. What the Bible does is reveal the nature, character, and work of God."},
    {"message":"who are the elect of god?", "response":"Simply put, the “elect of God” are those whom God has predestined to salvation. They are called the “elect” because that word denotes “determining beforehand,” “ordaining,” “deciding ahead of time.” Every six years in the Philippines, we “elect” a President—i.e., we choose who will serve in that office. The same goes for God and those who will be saved; God chooses those who will be saved. These are the elect of God. <a href='https://biblia.com/bible/esv/romans/8/28-30' target='_blank' rel='noopener noreferrer'>(Rom. 8:28-30)</a>"},
    {"message":"who's the elect of god?", "response":"Simply put, the “elect of God” is the one whom God has predestined to salvation. S/he is called the “elect” because that word denotes “determining beforehand,” “ordaining,” “deciding ahead of time.” Every six years in the Philippines, we “elect” a President—i.e., we choose who will serve in that office. The same goes for God and those who will be saved; God chooses those who will be saved. These are the elect of God. <a href='https://biblia.com/bible/esv/romans/8/28-30' target='_blank' rel='noopener noreferrer'>(Rom. 8:28-30)</a>"},
    {"message":"who is the elect of god?", "response":"Simply put, the “elect of God” is the one whom God has predestined to salvation. S/he is called the “elect” because that word denotes “determining beforehand,” “ordaining,” “deciding ahead of time.” Every six years in the Philippines, we “elect” a President—i.e., we choose who will serve in that office. The same goes for God and those who will be saved; God chooses those who will be saved. These are the elect of God. <a href='https://biblia.com/bible/esv/romans/8/28-30' target='_blank' rel='noopener noreferrer'>(Rom. 8:28-30)</a>"},
    {"message":"who created god?", "response":"The question is tricky because it sneaks in the false assumption that God came from somewhere and then asks where that might be. The answer is that the question does not even make sense. It is like asking, “What does blue smell like?” Blue is not in the category of things that have a smell, so the question itself is flawed. In the same way, God is not in the category of things that are created or caused. God is uncaused and uncreated—He simply exists."},
    {"message":"who made god?", "response":"The question is tricky because it sneaks in the false assumption that God came from somewhere and then asks where that might be. The answer is that the question does not even make sense. It is like asking, “What does blue smell like?” Blue is not in the category of things that have a smell, so the question itself is flawed. In the same way, God is not in the category of things that are created or caused. God is uncaused and uncreated—He simply exists."},
    {"message":"does god exist?", "response":"The question is tricky because it sneaks in the false assumption that God came from somewhere and then asks where that might be. The answer is that the question does not even make sense. It is like asking, “What does blue smell like?” Blue is not in the category of things that have a smell, so the question itself is flawed. In the same way, God is not in the category of things that are created or caused. God is uncaused and uncreated—He simply exists. <a href='https://biblia.com/bible/esv/genesis/1/1' target='_blank' rel='noopener noreferrer'>(Genesis 1:1)</a>"},
    {"message":"where did god come from?", "response":"We know that from nothing, nothing comes. So, if there were ever a time when there was absolutely nothing in existence, then nothing would have ever come into existence. But things do exist. Therefore, since there could never have been absolutely nothing, something had to have always been in existence. That ever-existing thing is what we call God. God is the uncaused Being that caused everything else to come into existence. God is the uncreated Creator who created the universe and everything in it."},
    {"message":"what are the five solas?", "response":"Sola Gratia (Grace Alone, Sola Fide (Faith Alone), Solus Cristus (Christ Alone), Sola Scriptura (Scripture Alone), Soli Deo Gloria (To the Glory of God ALone). Please refer to our article thru this link - <a href='https://codenimus.github.io/KodegoProjects/five-solas.html'>5 Solas</a>"},
    {"message":"what are the 5 solas?", "response":"Sola Gratia (Grace Alone, Sola Fide (Faith Alone), Solus Cristus (Christ Alone), Sola Scriptura (Scripture Alone), Soli Deo Gloria (To the Glory of God ALone). Please refer to our article thru this link - <a href='https://codenimus.github.io/KodegoProjects/five-solas.html'>5 Solas</a>"},
    {"message":"what is your mission?", "response":"If you meant about 'the mission of our website,' then it's to <em>Proclaim, Teach, and Defend the Holines of God</em> in all its fullness to as many people as possible!"},
    {"message":"what's your mission?", "response":"If you meant about 'the mission of our website,' then it's to <em>Proclaim, Teach, and Defend the Holines of God</em> in all its fullness to as many people as possible!"},
    {"message":"what is your vision?", "response":"If you meant about 'the vision of our website,' it goes hand in hand with our mission, that is to <em>Proclaim, Teach, and Defend the Holines of God</em> in all its fullness to as many people as possible!"},
    {"message":"what's your vision?", "response":"If you meant about 'the vision of our website,' it goes hand in hand with our mission, that is to <em>Proclaim, Teach, and Defend the Holines of God</em> in all its fullness to as many people as possible!"},
    {"message":"i want to know more about god.", "response":"Feel free to download our free self-paced PDF courses using this link - <a href='https://codenimus.github.io/KodegoProjects/self-study-downloads.html'>FREE Self-paced Study Ebooks</a>"},
    {"message":"i want to know more about christianity.", "response":"Feel free to download our free self-paced PDF courses using this link - <a href='https://codenimus.github.io/KodegoProjects/self-study-downloads.html'>FREE Self-paced Study Ebooks</a>"},
    {"message":"do you have free ebooks?", "response":"Feel free to download our free self-paced PDF courses using this link - <a href='https://codenimus.github.io/KodegoProjects/self-study-downloads.html'>FREE Self-paced Study Ebooks</a>"},
    {"message":"do you have free courses?", "response":"Feel free to download our free self-paced PDF courses using this link - <a href='https://codenimus.github.io/KodegoProjects/self-study-downloads.html'>FREE Self-paced Study Ebooks</a>"},
    {"message":"i want to know god?", "response":"Feel free to download our free self-paced PDF courses using this link - <a href='https://codenimus.github.io/KodegoProjects/self-study-downloads.html'>FREE Self-paced Study Ebooks</a>"},
    {"message":"how will i know more about christianity?", "response":"Feel free to download our free self-paced PDF courses using this link - <a href='https://codenimus.github.io/KodegoProjects/self-study-downloads.html'>FREE Self-paced Study Ebooks</a>"},
    {"message":"how to know god?", "response":"Feel free to download our free self-paced PDF courses using this link - <a href='https://codenimus.github.io/KodegoProjects/self-study-downloads.html'>FREE Self-paced Study Ebooks</a>"},
    {"message":"what is predestination?", "response":"<a href='https://biblia.com/bible/esv/romans/8/29-30' target='_blank' rel='noopener noreferrer'>Romans 8:29-30</a> says, 'For those God foreknew he also predestined to be conformed to the likeness of his Son, that he might be the firstborn among many brothers. And those he predestined, he also called; those he called, he also justified; those he justified, he also glorified.'"},
    {"message":"is it possible to be saved but not predestined?", "response":"It is impossible for someone to be saved without being elected by God to salvation. We are all sinners, and, left to ourselves, we would never choose God. Our initial response to God is to rebel against His love and sovereignty. We do not seek Him <a href='https://biblia.com/bible/esv/romans/3/11' target='_blank' rel='noopener noreferrer'>Rom. 3:11</a>. He must initiate the process. Jesus told the crowds who were grumbling at His teaching, 'No one can come to me unless the Father who sent me draws them' <a href='https://biblia.com/bible/esv/john/6/44' target='_blank' rel='noopener noreferrer'>(John 6:44)</a>. In other words, no one can be saved unless they are elect."},
    {"message":"doctrine of election?", "response":"In a nutshell, the biblical doctrine of election teaches that God chooses to save some, and, by necessity, if He does not choose everyone, then there are some who are passed over. Those whom He has chosen to save are referred to as “the elect” (see, e.g., <a href='https://biblia.com/bible/esv/mark/13/20' target='_blank' rel='noopener noreferrer'>Mark 13:20)</a>"},
    {"message":"what is the doctrine of election?", "response":"In a nutshell, the biblical doctrine of election teaches that God chooses to save some, and, by necessity, if He does not choose everyone, then there are some who are passed over. Those whom He has chosen to save are referred to as “the elect” (see, e.g., <a href='https://biblia.com/bible/esv/mark/13/20' target='_blank' rel='noopener noreferrer'>Mark 13:20)</a>"},
    {"message":"who is jesus christ?", "response":"Jesus is both God and man. As God, Jesus could satisfy God's wrath. As a man, Jesus had the capability of dying. As the God-man, Jesus is the perfect Mediator between heaven and earth <a href='https://biblia.com/bible/esv/1-timothy/2/5' target='_blank' rel='noopener noreferrer'>(1 Timothy 2:5)</a>. Salvation is available only through faith in Jesus Christ. As He proclaimed, “I am the way and the truth and the life. No one comes to the Father except through me” <a href='https://biblia.com/bible/esv/john/14/6' target='_blank' rel='noopener noreferrer'>(John 14:6)</a>. You can read a brief, but detailed article about Jesus Christ in <a href='https://www.gotquestions.org/who-is-Jesus.html' target='_blank' rel='noopener noreferrer'>GotQuestion</a>."},
    {"message":"who's jesus christ?", "response":"Jesus is both God and man. As God, Jesus could satisfy God's wrath. As a man, Jesus had the capability of dying. As the God-man, Jesus is the perfect Mediator between heaven and earth <a href='https://biblia.com/bible/esv/1-timothy/2/5' target='_blank' rel='noopener noreferrer'>(1 Timothy 2:5)</a>. Salvation is available only through faith in Jesus Christ. As He proclaimed, “I am the way and the truth and the life. No one comes to the Father except through me” <a href='https://biblia.com/bible/esv/john/14/6' target='_blank' rel='noopener noreferrer'>(John 14:6)</a>. You can read a brief, but detailed article about Jesus Christ in <a href='https://www.gotquestions.org/who-is-Jesus.html' target='_blank' rel='noopener noreferrer'>GotQuestion</a>."},
    {"message":"who's christ?", "response":"Jesus is both God and man. As God, Jesus could satisfy God's wrath. As a man, Jesus had the capability of dying. As the God-man, Jesus is the perfect Mediator between heaven and earth <a href='https://biblia.com/bible/esv/1-timothy/2/5' target='_blank' rel='noopener noreferrer'>(1 Timothy 2:5)</a>. Salvation is available only through faith in Jesus Christ. As He proclaimed, “I am the way and the truth and the life. No one comes to the Father except through me” <a href='https://biblia.com/bible/esv/john/14/6' target='_blank' rel='noopener noreferrer'>(John 14:6)</a>. You can read a brief, but detailed article about Jesus Christ in <a href='https://www.gotquestions.org/who-is-Jesus.html' target='_blank' rel='noopener noreferrer'>GotQuestion</a>."},
    {"message":"christ jesus?", "response":"Jesus is both God and man. As God, Jesus could satisfy God's wrath. As a man, Jesus had the capability of dying. As the God-man, Jesus is the perfect Mediator between heaven and earth <a href='https://biblia.com/bible/esv/1-timothy/2/5' target='_blank' rel='noopener noreferrer'>(1 Timothy 2:5)</a>. Salvation is available only through faith in Jesus Christ. As He proclaimed, “I am the way and the truth and the life. No one comes to the Father except through me” <a href='https://biblia.com/bible/esv/john/14/6' target='_blank' rel='noopener noreferrer'>(John 14:6)</a>. You can read a brief, but detailed article about Jesus Christ in <a href='https://www.gotquestions.org/who-is-Jesus.html' target='_blank' rel='noopener noreferrer'>GotQuestion</a>."},
    {"message":"who is christ?", "response":"Jesus is both God and man. As God, Jesus could satisfy God's wrath. As a man, Jesus had the capability of dying. As the God-man, Jesus is the perfect Mediator between heaven and earth <a href='https://biblia.com/bible/esv/1-timothy/2/5' target='_blank' rel='noopener noreferrer'>(1 Timothy 2:5)</a>. Salvation is available only through faith in Jesus Christ. As He proclaimed, “I am the way and the truth and the life. No one comes to the Father except through me” <a href='https://biblia.com/bible/esv/john/14/6' target='_blank' rel='noopener noreferrer'>(John 14:6)</a>. You can read a brief, but detailed article about Jesus Christ in <a href='https://www.gotquestions.org/who-is-Jesus.html' target='_blank' rel='noopener noreferrer'>GotQuestion</a>."},
    {"message":"who is christ jesus?", "response":"Jesus is both God and man. As God, Jesus could satisfy God's wrath. As a man, Jesus had the capability of dying. As the God-man, Jesus is the perfect Mediator between heaven and earth <a href='https://biblia.com/bible/esv/1-timothy/2/5' target='_blank' rel='noopener noreferrer'>(1 Timothy 2:5)</a>. Salvation is available only through faith in Jesus Christ. As He proclaimed, “I am the way and the truth and the life. No one comes to the Father except through me” <a href='https://biblia.com/bible/esv/john/14/6' target='_blank' rel='noopener noreferrer'>(John 14:6)</a>. You can read a brief, but detailed article about Jesus Christ in <a href='https://www.gotquestions.org/who-is-Jesus.html' target='_blank' rel='noopener noreferrer'>GotQuestion</a>."},
    {"message":"who's christ jesus?", "response":"Jesus is both God and man. As God, Jesus could satisfy God's wrath. As a man, Jesus had the capability of dying. As the God-man, Jesus is the perfect Mediator between heaven and earth <a href='https://biblia.com/bible/esv/1-timothy/2/5' target='_blank' rel='noopener noreferrer'>(1 Timothy 2:5)</a>. Salvation is available only through faith in Jesus Christ. As He proclaimed, “I am the way and the truth and the life. No one comes to the Father except through me” <a href='https://biblia.com/bible/esv/john/14/6' target='_blank' rel='noopener noreferrer'>(John 14:6)</a>. You can read a brief, but detailed article about Jesus Christ in <a href='https://www.gotquestions.org/who-is-Jesus.html' target='_blank' rel='noopener noreferrer'>GotQuestion</a>."},
    {"message":"what does the bible teach about the trinity?", "response":"The Trinity is one God existing in three Persons. Understand that this is not in any way suggesting three Gods. Keep in mind when studying this subject that the word “Trinity” is not found in Scripture. This is a term that is used to attempt to describe the triune God—three coexistent, co-eternal Persons who are God (TAKE NOTE: Not Gods). Of real importance is that the concept represented by the word “Trinity” does exist in Scripture. You can read the full explanation on the subject of the Trinity at <a href='https://www.gotquestions.org/Trinity-Bible.html' target='_blank' rel='noopener noreferrer'>GotQuestions</a>."},
    {"message":"what is the trinity?", "response":"The Trinity is one God existing in three Persons. Understand that this is not in any way suggesting three Gods. Keep in mind when studying this subject that the word “Trinity” is not found in Scripture. This is a term that is used to attempt to describe the triune God—three coexistent, co-eternal Persons who are God (TAKE NOTE: Not Gods). Of real importance is that the concept represented by the word “Trinity” does exist in Scripture. You can read the full explanation on the subject of the Trinity at <a href='https://www.gotquestions.org/Trinity-Bible.html' target='_blank' rel='noopener noreferrer'>GotQuestions</a>."},
    {"message":"does the bible teach the trinity?", "response":"The Trinity is a concept that is impossible for any human being to fully understand, let alone explain. God is infinitely greater than we are; therefore, we should not expect to be able to fully understand Him. The Bible teaches that the Father is God, that Jesus is God, and that the Holy Spirit is God. The Bible also teaches that there is only one God. Though we can understand some facts about the relationship of the different Persons of the Trinity to one another, ultimately, it is incomprehensible to the human mind. However, this does not mean the Trinity is not true or that it is not based on the teachings of the Bible. You can read the full explanation on the subject of the Trinity at <a href='https://www.gotquestions.org/Trinity-Bible.html' target='_blank' rel='noopener noreferrer'>GotQuestions</a>."},
    {"message":"what is trinity in the bible?", "response":"The Trinity is one God existing in three Persons. Understand that this is not in any way suggesting three Gods. Keep in mind when studying this subject that the word “Trinity” is not found in Scripture. This is a term that is used to attempt to describe the triune God—three coexistent, co-eternal Persons who are God (TAKE NOTE: Not Gods). Of real importance is that the concept represented by the word “Trinity” does exist in Scripture. You can read the full explanation on the subject of the Trinity at <a href='https://www.gotquestions.org/Trinity-Bible.html' target='_blank' rel='noopener noreferrer'>GotQuestions</a>."},
    {"message":"what is semper radicata?", "response":"The Latin phrase, when translated to the English language, means Always <em>(Semper)</e> Rooted <em>(Radicata)</em>."},
    {"message":"what is a christian?", "response":"The first step to become a Christian is to understand what the term “Christian” means. The origin of the term “Christian” was in the city of Antioch in the first century A.D. (<a href='https://biblia.com/bible/esv/acts/11/26' target='_blank' rel='noopener noreferrer'>see Acts 11:26</a>). It is possible that, at first, the term “Christian” was intended to be an insult. The word essentially means “little Christ.” However, over the centuries, believers in Christ have adopted the term “Christian” and use it to identify themselves as followers of Jesus Christ. A simple definition of a Christian is a person who follows Jesus Christ."},
    {"message":"what's a christian?", "response":"The first step to become a Christian is to understand what the term “Christian” means. The origin of the term “Christian” was in the city of Antioch in the first century A.D. (see <a href='https://biblia.com/bible/esv/acts/11/26' target='_blank' rel='noopener noreferrer'>Acts 11:26</a>). It is possible that, at first, the term “Christian” was intended to be an insult. The word essentially means “little Christ.” However, over the centuries, believers in Christ have adopted the term “Christian” and use it to identify themselves as followers of Jesus Christ. A simple definition of a Christian is a person who follows Jesus Christ."},
    {"message":"how can i become a christian?", "response":"This is the best part. Because of His love for us, God has made it exceedingly simple to become a Christian. All you have to do is receive Jesus as your Savior, fully accepting His death as the sufficient sacrifice for your sins (<a href='https://biblia.com/bible/esv/john/3/16' target='_blank' rel='noopener noreferrer'>John 3:16</a>), fully trusting Him alone as your Savior (<a href='https://biblia.com/bible/esv/john/14/6' target='_blank' rel='noopener noreferrer'>John 14:6</a>; <a href='https://biblia.com/bible/esv/acts/4/12' target='_blank' rel='noopener noreferrer'>Acts 4:12</a>). Becoming a Christian is not all about rituals, going to church, or doing certain things while refraining from other things. Becoming a Christian is all about having a personal relationship with Jesus Christ. A personal relationship with Jesus Christ, through faith, is what makes a person a Christian."},
    {"message":"how can i be saved","response":"This simple, yet profound, question is the most important question that can be asked. <em>'How can I be saved?'</em> deals with where we will spend eternity after our lives in this world are over. There is no more important issue than our eternal destiny. Thankfully, the Bible is abundantly clear on how a person can be saved. The Philippian jailer asked Paul and Silas, “Sirs, what must I do to be saved?” (Acts 16:30). Paul and Silas responded, “Believe in the Lord Jesus, and you will be saved” (Acts 16:31)."},
];

setTimeout(function(){
    chatBotSendMessage("Hello and welcome!");
},1000);

setTimeout(function(){
    chatBotSendMessage("Go ahead and ask me? 😄");
},3000);

function chatBotSendMessage(messageText) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-start');
    messageElement.classList.add('rounded-2');
    messageElement.classList.add('shadow-sm');
    messageElement.classList.add('m-1');
    messageElement.classList.add('p-1');

    messageElement.innerHTML = '<span class="fw-bold fst-italic">Root: </span>' + '<span class="mt-1 p-1">' + messageText + '</span>';

    messageElement.animate([{easing:"ease-in", opacity:0.4},{opacity:1}],{duration:500});
    chatContainer.appendChild(messageElement);

    // scroll to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage(messageText) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-end');
    messageElement.classList.add('alert');
    messageElement.classList.add('alert-success');
    messageElement.classList.add('rounded-2');
    messageElement.classList.add('shadow-sm');
    messageElement.classList.add('m-1');
    messageElement.classList.add('p-1');

    messageElement.innerHTML = '<span class="fw-bold fst-italic">You: </span>' + '<span class="mt-1 p-1">' + messageText + '</span>';

    messageElement.animate([{easing:"ease-in", opacity:0.4},{opacity:1}],{duration:500});

    chatContainer.appendChild(messageElement);

    // scroll to last message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

sendBtn.addEventListener('click', function(e) { 
    if(textbox.value == "") {
        alert('Please type in your messge');

    } else {
        let messageText = textbox.value.trim();
        user.message = messageText;
        sendMessage(messageText);
        textbox.value = "";

        processMessage();
        }
});

function processMessage(){
    if(user.message.length > 7 || user.message.includes('hi') || user.message.includes('hello')) {
    // array of results
    var result = arrayOfPossibleMessages.filter(val=> val.message.includes(user.message.toLowerCase()));

    if(result.length > 0){
        var response = result[0].response;

        setTimeout(function(){
            chatBotSendMessage(response);
            },1500);
    } else {
        setTimeout(function(){
            chatBotSendMessage("I don't understand!");
            },1500);
    }
    }else if (user.message == "how" || user.message == "who" || user.message == "what" || user.message == "when" || user.message == "why" || user.message == "?") {

        setTimeout(function(){
            chatBotSendMessage("?");
            },1500);
    } else {
        setTimeout(function(){
            chatBotSendMessage("Please send me a complete query.");
            },1500);
    }
    
};

textbox.addEventListener('keypress', function(e) {
    //if use hits the enter button on keyboard (13)
    if(e.which == 13) {
        if(textbox.value == "") {
            alert('Please type in your messge');
    
        } else {
            let messageText = textbox.value.trim();
            user.message = messageText;
            sendMessage(messageText);
            textbox.value = "";

            processMessage();
            }
    }
});