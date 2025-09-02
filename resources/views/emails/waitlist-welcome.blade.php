<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to KasuaBuy Waitlist</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .logo {
            color: #5F017B;
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .welcome-message {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #5F017B;
        }
        .highlight {
            color: #5F017B;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
            font-size: 14px;
        }
        .button {
            display: inline-block;
            background-color: #5F017B;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 5px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">KasuaBuy</div>
            <h1>Welcome to Our Waitlist!</h1>
        </div>

        <div class="welcome-message">
            <h2>Hello {{ $waitlistEntry->full_name }}! </h2>
            <p>Thank you for joining the <span class="highlight">KasuaBuy waitlist</span>! We're excited to have you as part of our community.</p>
        </div>

        <h3>What happens next?</h3>
        <ul>
            <li>You'll be among the first to know when we launch</li>
            <li> Early access to exclusive features and deals</li>
            <li> Updates via WhatsApp at {{ $waitlistEntry->phone_number }}</li>
            @if($waitlistEntry->email)
            <li> Important updates sent to {{ $waitlistEntry->email }}</li>
            @endif
        </ul>

        <div style="background-color: #e8f5e8; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h4 style="color: #2d5a2d; margin-top: 0;"> Coming Soon:</h4>
            <p style="margin-bottom: 0;">KasuaBuy will revolutionize how you shop online in Nigeria. Get ready for an amazing experience!</p>
        </div>

        <h3>Stay Connected</h3>
        <p>Follow us on social media for the latest updates:</p>
        <p>
             WhatsApp: We'll send you updates directly<br>
             Website: Keep an eye on our official launch
        </p>

        <div class="footer">
            <p>Thank you for your patience and support!</p>
            <p><strong>The KasuaBuy Team</strong></p>
            <hr style="margin: 20px 0;">
            <p style="font-size: 12px; color: #999;">
                You're receiving this email because you joined our waitlist on {{ $waitlistEntry->created_at->format('F j, Y') }}.<br>
                If you have any questions, feel free to reach out to us.
            </p>
        </div>
    </div>
</body>
</html>
