import React, { useState, useEffect, useRef } from 'react';
import IMask from 'imask';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        tel: '',
        age: '',
        gender: '',
        examType: '',
        body: ''  // Новое поле для текста
    });
    const [lastSubmissionTime, setLastSubmissionTime] = useState(null);
    const telInputRef = useRef(null);

    useEffect(() => {
        const maskOptions = {
            mask: '+{998}(00)000-00-00',
        };
        const mask = IMask(telInputRef.current, maskOptions);

        const loadRecaptcha = () => {
            const script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/enterprise.js?render=6LdngysqAAAAAHFmIBWhU1NPbMmKS1RdePIub-1F';
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        };

        loadRecaptcha();

        return () => {
            mask.destroy();
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Получаем токен reCAPTCHA
        const token = await new Promise((resolve) => {
            window.grecaptcha.enterprise.ready(() => {
                window.grecaptcha.enterprise.execute('6LdngysqAAAAAHFmIBWhU1NPbMmKS1RdePIub-1F', { action: 'submit' }).then(resolve);
            });
        });

        // Проверка времени последней отправки формы
        const currentTime = new Date().getTime();

        // Если lastSubmissionTime еще не установлено, просто продолжите
        if (lastSubmissionTime) {
            if (currentTime - lastSubmissionTime < 30 * 60 * 1000) {
                alert('Пожалуйста, попробуйте снова через 30 минут.');
                return;
            }
        }

        try {
            const response = await fetch("https://formspree.io/f/mpwaljag", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ ...formData, "g-recaptcha-response": token })
            });

            if (response.ok) {
                alert('Спасибо за регистрацию!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    tel: '',
                    age: '',
                    gender: '',
                    examType: '',
                    body: ''  // Сбрасываем поле body
                });
                setLastSubmissionTime(currentTime); // Обновляем время последней отправки
            } else {
                alert('Ошибка при отправке формы.');
            }
        } catch (err) {
            console.error(err);
            alert('Ошибка при отправке формы.');
        }
    };

    return (
        <div className="registration">
            <form
                onSubmit={handleFormSubmit}
                name="registration-form"
                method="POST"
            >
                {/* Honeypot Field */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />

                <div className="registration-form__blok registration-form__blok-1">
                    <div className="registration-form__blok-container">
                        <label htmlFor="firstName">Имя</label>
                        <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="registration-form__blok-container">
                        <label htmlFor="lastName">Фамилия</label>
                        <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="registration-form__blok-container">
                        <label htmlFor="tel">Телефон</label>
                        <input
                            id="tel"
                            type="tel"
                            name="tel"
                            ref={telInputRef}
                            value={formData.tel}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                </div>

                <div className="registration-form__blok">

                    <div className="registration-form__blok-container">
                        <label htmlFor="age">Возраст</label>
                        <input
                            id="age"
                            type="number"
                            name="age"
                            min="1"
                            value={formData.age}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="registration-form__blok-container">
                        <label htmlFor="gender">Пол</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="" disabled>Выберите пол</option>
                            <option value="male">Мужской</option>
                            <option value="female">Женский</option>
                        </select>
                    </div>

                    <div className="registration-form__blok-container">
                        <label htmlFor="examType">Выбор экзамена</label>
                        <select
                            id="examType"
                            name="examType"
                            value={formData.examType}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="" disabled>Выберите экзамен</option>
                            <option value="IELTS">IELTS</option>
                            <option value="CEFR">CEFR</option>
                        </select>
                    </div>

                </div>

                {/* Поле для ввода текста */}
                <div className="registration-form__blok-container">
                    <label htmlFor="body">Дополнительная информация</label>
                    <textarea
                        id="body"
                        name="body"
                        rows="4"
                        value={formData.body}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <br />
                <button className='registration__submit' type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};