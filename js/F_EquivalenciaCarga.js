$(document).ready(function () { });
//Número estructural SN								
//(sn)	1	2	3	4	5	6	
var tablaEqui2s_flex = Array(
    Array(0, 0, 0, 0, 0, 0, 0),
    Array(2, 0.0002, 0.0002, 0.0002, 0.0002, 0.0002, 0.0002),
    Array(4, 0.002, 0.003, 0.002, 0.002, 0.002, 0.002),
    Array(6, 0.009, 0.012, 0.011, 0.01, 0.009, 0.009),
    Array(8, 0.03, 0.035, 0.036, 0.033, 0.031, 0.029),
    Array(10, 0.075, 0.085, 0.09, 0.085, 0.079, 0.076),
    Array(12, 0.165, 0.177, 0.189, 0.183, 0.174, 0.168),
    Array(14, 0.325, 0.338, 0.354, 0.35, 0.338, 0.331),
    Array(16, 0.589, 0.598, 0.613, 0.612, 0.603, 0.596),
    Array(18, 1, 1, 1, 1, 1, 1),
    Array(20, 1.61, 1.59, 1.56, 1.55, 1.57, 1.59),
    Array(22, 2.49, 2.44, 2.35, 2.31, 2.35, 2.41),
    Array(24, 3.71, 3.62, 3.43, 3.33, 3.4, 3.51),
    Array(26, 5.36, 5.21, 4.88, 4.68, 4.77, 4.96),
    Array(28, 7.54, 7.31, 6.78, 6.42, 6.52, 6.83),
    Array(30, 10.4, 10, 9.2, 8.6, 8.7, 9.2),
    Array(32, 14, 13.5, 12.4, 11.5, 11.5, 12.1),
    Array(34, 18.5, 17.9, 16.3, 15, 14.9, 15.6),
    Array(36, 24.2, 23.3, 21.2, 19.3, 19, 19.9),
    Array(38, 31.1, 29.9, 27.1, 24.6, 24, 25.1),
    Array(40, 39.6, 38, 34.3, 30.9, 30, 31.2),
    Array(42, 49.7, 47.7, 43, 38.6, 37.2, 38.5),
    Array(44, 61.8, 59.3, 53.4, 47.6, 45.7, 47.1),
    Array(46, 76.1, 73, 65.6, 58.3, 55.7, 57),
    Array(48, 92.9, 89.1, 80, 70.9, 67.3, 68.6),
    Array(50, 113, 108, 97, 86, 81, 82),


);

var tablaEqui25s_flex = Array(
    Array(0, 0, 0, 0, 0, 0, 0),
    Array(2, 0.0004, 0.0004, 0.0003, 0.0002, 0.0002, 0.0002),
    Array(4, 0.003, 0.004, 0.004, 0.003, 0.002, 0.002),
    Array(6, 0.011, 0.017, 0.017, 0.013, 0.01, 0.009),
    Array(8, 0.032, 0.047, 0.051, 0.041, 0.034, 0.031),
    Array(10, 0.078, 0.102, 0.118, 0.102, 0.088, 0.08),
    Array(12, 0.168, 0.198, 0.229, 0.213, 0.189, 0.176),
    Array(14, 0.328, 0.358, 0.399, 0.388, 0.36, 0.342),
    Array(16, 0.591, 0.613, 0.646, 0.645, 0.623, 0.606),
    Array(18, 1, 1, 1, 1, 1, 1),
    Array(20, 1.61, 1.57, 1.49, 1.47, 1.51, 1.55),
    Array(22, 2.48, 2.38, 2.17, 2.09, 2.18, 2.3),
    Array(24, 3.69, 3.49, 3.09, 2.89, 3.03, 3.27),
    Array(26, 5.33, 4.99, 4.31, 3.91, 4.09, 4.48),
    Array(28, 7.49, 6.98, 5.9, 5.21, 5.39, 5.98),
    Array(30, 10.3, 9.5, 7.9, 6.8, 7, 7.8),
    Array(32, 13.9, 12.8, 10.5, 8.8, 8.9, 10),
    Array(34, 18.4, 16.9, 13.7, 11.3, 11.2, 12.5),
    Array(36, 24, 22, 17.7, 14.4, 13.9, 15.5),
    Array(38, 30.9, 28.3, 22.6, 18.1, 17.2, 19),
    Array(40, 39.3, 35.9, 28.5, 22.5, 21.1, 23),
    Array(42, 49.3, 45, 35.6, 27.8, 25.6, 27.7),
    Array(44, 61.3, 55.9, 44, 34, 31, 33.1),
    Array(46, 75.5, 68.8, 54, 41.4, 37.2, 39.3),
    Array(48, 92.2, 83.9, 65.7, 50.1, 44.5, 46.5),
    Array(50, 112, 102, 79, 60, 53, 55),

);

var tablaEqui3s_flex = Array(
    Array(0, 0, 0, 0, 0, 0, 0),
    Array(2, 0.0008, 0.0009, 0.0006, 0.0003, 0.0002, 0.0002),
    Array(4, 0.004, 0.008, 0.006, 0.004, 0.002, 0.002),
    Array(6, 0.014, 0.03, 0.028, 0.018, 0.012, 0.01),
    Array(8, 0.035, 0.07, 0.08, 0.055, 0.04, 0.034),
    Array(10, 0.082, 0.132, 0.168, 0.132, 0.101, 0.086),
    Array(12, 0.173, 0.231, 0.296, 0.26, 0.212, 0.187),
    Array(14, 0.332, 0.388, 0.468, 0.447, 0.391, 0.358),
    Array(16, 0.594, 0.633, 0.695, 0.693, 0.651, 0.622),
    Array(18, 1, 1, 1, 1, 1, 1),
    Array(20, 1.6, 1.53, 1.41, 1.38, 1.44, 1.51),
    Array(22, 2.47, 2.29, 1.96, 1.83, 1.97, 2.16),
    Array(24, 3.67, 3.33, 2.69, 2.39, 2.6, 2.96),
    Array(26, 5.29, 4.72, 3.65, 3.08, 3.33, 3.91),
    Array(28, 7.43, 6.56, 4.88, 3.93, 4.17, 5),
    Array(30, 10.2, 8.9, 6.5, 5, 5.1, 6.3),
    Array(32, 13.8, 12, 8.4, 6.2, 6.3, 7.7),
    Array(34, 18.2, 15.7, 10.9, 7.8, 7.6, 9.3),
    Array(36, 23.8, 20.4, 14, 9.7, 9.1, 11),
    Array(38, 30.6, 26.2, 17.7, 11.9, 11, 13),
    Array(40, 38.8, 33.2, 22.2, 14.6, 13.1, 15.3),
    Array(42, 48.8, 41.6, 27.6, 17.8, 15.5, 17.8),
    Array(44, 60.6, 51.6, 34, 21.6, 18.4, 20.6),
    Array(46, 74.7, 63.4, 41.5, 26.1, 21.6, 23.8),
    Array(48, 91.2, 77.3, 50.3, 31.3, 25.4, 27.4),
    Array(50, 110, 94, 61, 37, 30, 32),


);

var tablaEqui2ta_flex = Array(
    Array(0, 0, 0, 0, 0, 0, 0),
    Array(2, 0, 0, 0, 0, 0, 0),
    Array(4, 0.0003, 0.0003, 0.0003, 0.0002, 0.0002, 0.0002),
    Array(6, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001),
    Array(8, 0.003, 0.003, 0.003, 0.003, 0.003, 0.002),
    Array(10, 0.007, 0.008, 0.008, 0.007, 0.006, 0.006),
    Array(12, 0.013, 0.016, 0.016, 0.014, 0.013, 0.012),
    Array(14, 0.024, 0.029, 0.029, 0.026, 0.024, 0.023),
    Array(16, 0.041, 0.048, 0.05, 0.046, 0.042, 0.04),
    Array(18, 0.066, 0.077, 0.081, 0.075, 0.069, 0.066),
    Array(20, 0.103, 0.117, 0.124, 0.117, 0.109, 0.105),
    Array(22, 0.156, 0.171, 0.183, 0.174, 0.164, 0.158),
    Array(24, 0.227, 0.244, 0.26, 0.252, 0.239, 0.231),
    Array(26, 0.322, 0.34, 0.36, 0.353, 0.338, 0.329),
    Array(28, 0.447, 0.465, 0.487, 0.481, 0.466, 0.455),
    Array(30, 0.607, 0.623, 0.646, 0.643, 0.627, 0.617),
    Array(32, 0.81, 0.823, 0.843, 0.842, 0.829, 0.819),
    Array(34, 1.06, 1.07, 1.08, 1.08, 1.08, 1.07),
    Array(36, 1.38, 1.38, 1.38, 1.38, 1.38, 1.38),
    Array(38, 1.76, 1.75, 1.73, 1.72, 1.73, 1.74),
    Array(40, 2.22, 2.19, 2.15, 2.13, 2.16, 2.18),
    Array(42, 2.77, 2.73, 2.64, 2.62, 2.66, 2.7),
    Array(44, 3.42, 3.36, 3.23, 3.18, 3.24, 3.31),
    Array(46, 4.2, 4.11, 3.92, 3.83, 3.91, 4.02),
    Array(48, 5.1, 4.98, 4.72, 4.58, 4.68, 4.83),
    Array(50, 6.15, 5.99, 5.64, 5.44, 5.56, 5.77),
    Array(52, 7.37, 7.16, 6.71, 6.43, 6.56, 6.83),
    Array(54, 8.37, 8.51, 7.93, 7.55, 7.69, 8.03),
    Array(56, 10.4, 10.1, 9.3, 8.8, 9, 9.4),
    Array(58, 12.2, 11.8, 10.9, 10.3, 10.4, 10.9),
    Array(60, 14.3, 13.8, 12.7, 11.9, 12, 12.6),
    Array(62, 16.6, 16, 14.7, 13.7, 13.8, 14.5),
    Array(64, 19.3, 18.6, 17, 15.8, 15.8, 16.6),
    Array(66, 22.2, 21.4, 19.6, 18, 18, 18.9),
    Array(68, 25.5, 24.6, 22.4, 20.6, 20.5, 21.5),
    Array(70, 29.2, 28.1, 25.6, 23.4, 23.2, 24.3),
    Array(72, 33.3, 32, 29.1, 26.5, 26.2, 27.4),
    Array(74, 37.8, 36.4, 33, 30, 29.4, 30.8),
    Array(76, 42.8, 41.2, 37.3, 33.8, 33.1, 34.5),
    Array(78, 48.4, 46.5, 42, 38, 37, 38.6),
    Array(80, 54.4, 52.3, 47.2, 42.5, 41.3, 43),
    Array(82, 61.1, 58.7, 52.9, 47.6, 46, 47.8),
    Array(84, 68.4, 65.7, 59.2, 53, 51.2, 53),
    Array(86, 76.3, 73.3, 66, 59, 56.8, 58.6),
    Array(88, 85, 81.6, 73.4, 65.5, 62.8, 64.7),
    Array(90, 94.4, 90.6, 81.5, 72.6, 69.4, 71.3),

);

var tablaEqui25ta_flex = Array(
    Array(0, 0, 0, 0, 0, 0, 0),
    Array(2, 0.0001, 0.0001, 0.0001, 0, 0, 0),
    Array(4, 0.0005, 0.0005, 0.0004, 0.0003, 0.0003, 0.002),
    Array(6, 0.002, 0.002, 0.002, 0.001, 0.001, 0.001),
    Array(8, 0.004, 0.006, 0.005, 0.004, 0.003, 0.003),
    Array(10, 0.008, 0.013, 0.011, 0.009, 0.007, 0.006),
    Array(12, 0.015, 0.024, 0.023, 0.018, 0.014, 0.013),
    Array(14, 0.026, 0.041, 0.042, 0.033, 0.027, 0.024),
    Array(16, 0.044, 0.065, 0.07, 0.057, 0.047, 0.043),
    Array(18, 0.07, 0.097, 0.109, 0.092, 0.077, 0.07),
    Array(20, 0.107, 0.141, 0.162, 0.141, 0.121, 0.11),
    Array(22, 0.16, 0.198, 0.229, 0.207, 0.18, 0.166),
    Array(24, 0.231, 0.273, 0.315, 0.292, 0.26, 0.242),
    Array(26, 0.327, 0.37, 0.42, 0.401, 0.364, 0.342),
    Array(28, 0.451, 0.493, 0.548, 0.534, 0.495, 0.47),
    Array(30, 0.611, 0.648, 0.703, 0.695, 0.658, 0.633),
    Array(32, 0.813, 0.843, 0.889, 0.887, 0.857, 0.834),
    Array(34, 1.06, 1.08, 1.11, 1.11, 1.09, 1.08),
    Array(36, 1.38, 1.38, 1.38, 1.38, 1.38, 1.38),
    Array(38, 1.75, 1.73, 1.69, 1.68, 1.7, 1.73),
    Array(40, 2.21, 2.16, 2.06, 2.03, 2.08, 2.14),
    Array(42, 2.76, 2.67, 2.49, 2.43, 2.51, 2.61),
    Array(44, 3.41, 3.27, 2.99, 2.88, 3, 3.16),
    Array(46, 4.18, 3.98, 3.58, 3.4, 3.55, 3.79),
    Array(48, 5.08, 4.8, 4.25, 3.98, 4.17, 4.49),
    Array(50, 6.12, 5.76, 5.03, 4.64, 4.86, 5.28),
    Array(52, 7.33, 6.87, 5.93, 5.38, 5.63, 6.17),
    Array(54, 8.72, 8.14, 6.95, 6.22, 6.47, 7.15),
    Array(56, 10.3, 9.6, 8.1, 7.2, 7.4, 8.2),
    Array(58, 12.1, 11.3, 9.4, 8.2, 8.4, 9.4),
    Array(60, 14.2, 13.1, 10.9, 9.4, 9.6, 10.7),
    Array(62, 16.5, 15.3, 12.6, 10.7, 10.8, 12.1),
    Array(64, 19.1, 17.6, 14.5, 12.2, 12.2, 13.7),
    Array(66, 22.1, 20.3, 16.6, 13.8, 13.7, 15.4),
    Array(68, 25.3, 23.3, 18.9, 15.6, 15.4, 17.2),
    Array(70, 29, 26.6, 21.5, 17.6, 17.2, 19.2),
    Array(72, 33, 30.3, 24.4, 19.8, 19.2, 21.3),
    Array(74, 37.5, 34.4, 27.6, 22.2, 21.3, 23.6),
    Array(76, 42.5, 38.9, 31.1, 24.8, 23.7, 26.1),
    Array(78, 48, 43.9, 35, 27.8, 26.2, 28.8),
    Array(80, 54, 49.4, 39.2, 30.9, 29, 31.7),
    Array(82, 60.6, 55.4, 43.9, 34.4, 32, 34.8),
    Array(84, 67.8, 61.9, 49, 38.2, 35.3, 38.1),
    Array(86, 75.7, 69.1, 54.5, 42.3, 38.8, 41.7),
    Array(88, 84.3, 76.9, 60.6, 46.8, 42.6, 45.6),
    Array(90, 93.7, 85.4, 67.1, 51.7, 46.8, 49.7),

);

var tablaEqui3ta_flex = Array(
    Array(0, 0, 0, 0, 0, 0, 0),
    Array(2, 0.0002, 0.0002, 0.0001, 0.0001, 0, 0),
    Array(4, 0.001, 0.001, 0.001, 0, 0, 0),
    Array(6, 0.003, 0.004, 0.003, 0.002, 0.001, 0.001),
    Array(8, 0.006, 0.011, 0.009, 0.005, 0.003, 0.003),
    Array(10, 0.011, 0.024, 0.02, 0.012, 0.008, 0.007),
    Array(12, 0.019, 0.042, 0.039, 0.024, 0.017, 0.014),
    Array(14, 0.031, 0.066, 0.068, 0.045, 0.032, 0.026),
    Array(16, 0.049, 0.096, 0.109, 0.076, 0.055, 0.046),
    Array(18, 0.075, 0.134, 0.164, 0.121, 0.09, 0.076),
    Array(20, 0.113, 0.181, 0.232, 0.182, 0.139, 0.119),
    Array(22, 0.166, 0.241, 0.313, 0.26, 0.205, 0.178),
    Array(24, 0.238, 0.317, 0.407, 0.358, 0.292, 0.257),
    Array(26, 0.333, 0.413, 0.517, 0.476, 0.402, 0.36),
    Array(28, 0.457, 0.534, 0.643, 0.614, 0.538, 0.492),
    Array(30, 0.616, 0.684, 0.788, 0.773, 0.702, 0.656),
    Array(32, 0.817, 0.87, 0.956, 0.953, 0.896, 0.855),
    Array(34, 1.07, 1.1, 1.15, 1.15, 1.12, 1.09),
    Array(36, 1.38, 1.38, 1.38, 1.38, 1.38, 1.38),
    Array(38, 1.75, 1.71, 1.64, 1.62, 1.66, 1.7),
    Array(40, 2.21, 2.11, 1.94, 1.89, 1.98, 2.08),
    Array(42, 2.75, 2.59, 2.29, 2.19, 2.33, 2.5),
    Array(44, 3.39, 3.15, 2.7, 2.52, 2.71, 2.97),
    Array(46, 4.15, 3.81, 3.16, 2.89, 3.13, 3.5),
    Array(48, 5.04, 4.58, 3.7, 3.29, 3.57, 4.07),
    Array(50, 6.08, 5.47, 4.31, 3.74, 4.05, 4.7),
    Array(52, 7.27, 6.49, 5.01, 4.24, 4.57, 5.37),
    Array(54, 8.65, 7.67, 5.81, 4.79, 5.13, 6.1),
    Array(56, 10.2, 9, 6.7, 5.4, 5.7, 6.9),
    Array(58, 12, 10.6, 7.7, 6.1, 6.4, 7.7),
    Array(60, 14.1, 12.3, 8.9, 6.8, 7.1, 8.6),
    Array(62, 16.3, 14.2, 10.2, 7.7, 7.8, 9.5),
    Array(64, 18.9, 16.4, 11.6, 8.6, 8.6, 10.5),
    Array(66, 21.8, 18.9, 13.2, 9.6, 9.5, 11.6),
    Array(68, 25.1, 21.7, 15, 10.7, 10.5, 12.7),
    Array(70, 28.7, 24.7, 17, 12, 11.5, 13.9),
    Array(72, 32.7, 28.1, 19.2, 13.3, 12.6, 15.2),
    Array(74, 37.2, 31.9, 21.6, 14.8, 13.8, 16.5),
    Array(76, 42.1, 36, 24.3, 16.4, 15.1, 17.9),
    Array(78, 47.5, 40.6, 27.3, 18.2, 16.5, 19.4),
    Array(80, 53.4, 45.7, 30.5, 20.1, 18, 21),
    Array(82, 60, 51.2, 34, 22.2, 19.6, 22.7),
    Array(84, 67.1, 57.2, 37.9, 24.6, 21.3, 24.5),
    Array(86, 74.9, 63.8, 42.1, 27.1, 23.2, 26.4),
    Array(88, 83.4, 71, 46.7, 29.8, 25.2, 28.4),
    Array(90, 92.7, 78.8, 51.7, 32.7, 27.4, 30.5),

);

var tablaEqui2tr_flex = Array(
    Array(0, 0, 0, 0, 0, 0, 0),
    Array(2, 0, 0, 0, 0, 0, 0),
    Array(4, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001),
    Array(6, 0.0004, 0.0004, 0.0003, 0.0003, 0.0003, 0.0003),
    Array(8, 0.0009, 0.001, 0.0009, 0.0008, 0.0007, 0.0007),
    Array(10, 0.002, 0.002, 0.002, 0.002, 0.002, 0.001),
    Array(12, 0.004, 0.004, 0.004, 0.003, 0.003, 0.003),
    Array(14, 0.006, 0.007, 0.007, 0.006, 0.006, 0.005),
    Array(16, 0.01, 0.012, 0.012, 0.01, 0.009, 0.009),
    Array(18, 0.016, 0.019, 0.019, 0.017, 0.015, 0.015),
    Array(20, 0.024, 0.029, 0.029, 0.026, 0.024, 0.023),
    Array(22, 0.034, 0.042, 0.042, 0.038, 0.035, 0.034),
    Array(24, 0.049, 0.058, 0.06, 0.055, 0.051, 0.048),
    Array(26, 0.068, 0.08, 0.083, 0.077, 0.071, 0.068),
    Array(28, 0.093, 0.107, 0.113, 0.105, 0.098, 0.094),
    Array(30, 0.125, 0.14, 0.149, 0.14, 0.131, 0.126),
    Array(32, 0.164, 0.182, 0.194, 0.184, 0.173, 0.167),
    Array(34, 0.213, 0.233, 0.248, 0.238, 0.225, 0.217),
    Array(36, 0.273, 0.294, 0.313, 0.303, 0.288, 0.279),
    Array(38, 0.346, 0.368, 0.39, 0.381, 0.364, 0.353),
    Array(40, 0.434, 0.456, 0.481, 0.473, 0.454, 0.443),
    Array(42, 0.538, 0.56, 0.587, 0.58, 0.561, 0.548),
    Array(44, 0.662, 0.682, 0.71, 0.705, 0.686, 0.673),
    Array(46, 0.807, 0.825, 0.852, 0.849, 0.831, 0.818),
    Array(48, 0.976, 0.992, 1015, 1014, 0.999, 0.987),
    Array(50, 1.17, 1.18, 1.2, 1.2, 1.19, 1.18),
    Array(52, 1.4, 1.4, 1.42, 1.42, 1.41, 1.4),
    Array(54, 1.66, 1.66, 1.66, 1.66, 1.66, 1.66),
    Array(56, 1.95, 1.95, 1.93, 1.93, 1.94, 1.94),
    Array(58, 2.29, 2.27, 2.24, 2.23, 2.25, 2.27),
    Array(60, 2.67, 2.64, 2.59, 2.57, 2.6, 2.63),
    Array(62, 3.1, 3.06, 2.98, 2.95, 2.99, 3.04),
    Array(64, 3.59, 3.53, 3.41, 3.37, 3.42, 3.49),
    Array(66, 4.13, 4.05, 3.89, 3.83, 3.9, 3.99),
    Array(68, 4.73, 4.63, 4.43, 4.34, 4.42, 4.54),
    Array(70, 5.4, 5.28, 5.03, 4.9, 5, 5.15),
    Array(72, 6.15, 6, 5.68, 5.52, 5.63, 5.82),
    Array(74, 6.97, 6.79, 6.41, 6.2, 6.33, 6.56),
    Array(76, 7.88, 7.67, 7.21, 6.94, 7.08, 7.36),
    Array(78, 8.88, 8.63, 8.09, 7.75, 7.9, 8.23),
    Array(80, 9.98, 9.69, 9.05, 8.63, 8.79, 9.18),
    Array(82, 11.2, 10.8, 10.1, 9.6, 9.8, 10.2),
    Array(84, 12.5, 12.1, 11.2, 10.6, 10.8, 11.3),
    Array(86, 13.9, 13.5, 12.5, 11.8, 11.9, 12.5),
    Array(88, 15.5, 15, 13.8, 13, 13.2, 13.8),
    Array(90, 17.2, 16.6, 15.3, 14.3, 14.5, 15.2),

);

var tablaEqui25tr_flex = Array(
    Array(0, 0, 0, 0, 0, 0, 0),
    Array(2, 0, 0, 0, 0, 0, 0),
    Array(4, 0.0002, 0.0002, 0.0002, 0.0001, 0.0001, 0.0001),
    Array(6, 0.0006, 0.0007, 0.0005, 0.0004, 0.0003, 0.0003),
    Array(8, 0.001, 0.002, 0.001, 0.001, 0.001, 0.001),
    Array(10, 0.003, 0.004, 0.003, 0.002, 0.002, 0.002),
    Array(12, 0.005, 0.007, 0.006, 0.004, 0.003, 0.003),
    Array(14, 0.008, 0.012, 0.01, 0.008, 0.006, 0.006),
    Array(16, 0.0123, 0.019, 0.018, 0.013, 0.011, 0.01),
    Array(18, 0.018, 0.029, 0.028, 0.021, 0.017, 0.016),
    Array(20, 0.027, 0.042, 0.042, 0.032, 0.027, 0.024),
    Array(22, 0.038, 0.058, 0.06, 0.048, 0.04, 0.036),
    Array(24, 0.053, 0.078, 0.084, 0.068, 0.057, 0.051),
    Array(26, 0.072, 0.103, 0.114, 0.095, 0.08, 0.072),
    Array(28, 0.098, 0.133, 0.151, 0.128, 0.109, 0.099),
    Array(30, 0.129, 0.169, 0.195, 0.17, 0.145, 0.133),
    Array(32, 0.169, 0.213, 0.247, 0.22, 0.191, 0.175),
    Array(34, 0.219, 0.266, 0.308, 0.281, 0.246, 0.228),
    Array(36, 0.279, 0.329, 0.379, 0.352, 0.313, 0.292),
    Array(38, 0.352, 0.403, 0.461, 0.436, 0.393, 0.368),
    Array(40, 0.439, 0.491, 0.554, 0.533, 0.487, 0.459),
    Array(42, 0.543, 0.594, 0.661, 0.644, 0.597, 0.567),
    Array(44, 0.666, 0.714, 0.781, 0.769, 0.723, 0.692),
    Array(46, 0.811, 0.854, 0.918, 0.911, 0.868, 0.838),
    Array(48, 0.979, 1015, 1072, 1069, 1033, 1005),
    Array(50, 1.17, 1.2, 1.24, 1.25, 1.22, 1.2),
    Array(52, 1.4, 1.41, 1.44, 1.44, 1.43, 1.41),
    Array(54, 1.66, 1.66, 1.66, 1.66, 1.66, 1.66),
    Array(56, 1.95, 1.93, 1.9, 1.9, 1.91, 1.93),
    Array(58, 2.29, 2.25, 2.17, 2.16, 2.2, 2.24),
    Array(60, 2.67, 2.6, 2.48, 2.44, 2.51, 2.58),
    Array(62, 3.09, 3, 2.82, 2.76, 2.85, 2.95),
    Array(64, 3.57, 3.44, 3.19, 3.1, 3.22, 3.36),
    Array(66, 4.11, 3.94, 3.61, 3.47, 3.62, 3.81),
    Array(68, 4.71, 4.49, 4.06, 3.88, 4.05, 4.3),
    Array(70, 5.38, 5.11, 4.57, 4.32, 4.52, 4.84),
    Array(72, 6.12, 5.79, 5.13, 4.8, 5.03, 5.41),
    Array(74, 6.93, 6.54, 5.74, 5.32, 5.57, 6.04),
    Array(76, 7.84, 7.37, 6.41, 5.88, 6.15, 6.71),
    Array(78, 8.83, 8.28, 7.14, 6.49, 6.78, 7.43),
    Array(80, 9.92, 9.28, 7.95, 7.15, 7.45, 8.21),
    Array(82, 11.1, 10.4, 8.8, 7.9, 8.2, 9),
    Array(84, 12.4, 11.6, 9.8, 8.6, 8.9, 9.9),
    Array(86, 13.8, 12.9, 10.8, 9.5, 9.8, 10.9),
    Array(88, 15.4, 14.3, 11.9, 10.4, 10.6, 11.9),
    Array(90, 17.1, 15.8, 13.2, 11.3, 11.6, 12.9),


);

var tablaEqui3tr_flex = Array(
    Array(0, 0, 0, 0, 0, 0, 0),
    Array(2, 0.0001, 0.0001, 0.0001, 0, 0, 0),
    Array(4, 0.0005, 0.0004, 0.0003, 0.0002, 0.0001, 0.0001),
    Array(6, 0.001, 0.001, 0.001, 0.001, 0, 0),
    Array(8, 0.003, 0.004, 0.002, 0.001, 0.001, 0.001),
    Array(10, 0.005, 0.008, 0.005, 0.003, 0.002, 0.002),
    Array(12, 0.007, 0.014, 0.01, 0.006, 0.004, 0.003),
    Array(14, 0.011, 0.023, 0.018, 0.011, 0.007, 0.006),
    Array(16, 0.016, 0.035, 0.03, 0.018, 0.013, 0.01),
    Array(18, 0.022, 0.05, 0.047, 0.029, 0.02, 0.017),
    Array(20, 0.031, 0.069, 0.069, 0.044, 0.031, 0.026),
    Array(22, 0.043, 0.09, 0.097, 0.065, 0.046, 0.039),
    Array(24, 0.059, 0.116, 0.132, 0.092, 0.066, 0.056),
    Array(26, 0.079, 0.145, 0.174, 0.126, 0.092, 0.078),
    Array(28, 0.104, 0.179, 0.223, 0.168, 0.126, 0.107),
    Array(30, 0.136, 0.218, 0.279, 0.219, 0.167, 0.143),
    Array(32, 0.176, 0.265, 0.342, 0.279, 0.218, 0.188),
    Array(34, 0.226, 0.319, 0.413, 0.35, 0.279, 0.243),
    Array(36, 0.286, 0.382, 0.491, 0.432, 0.352, 0.31),
    Array(38, 0.359, 0.456, 0.577, 0.524, 0.437, 0.389),
    Array(40, 0.447, 0.543, 0.671, 0.626, 0.536, 0.483),
    Array(42, 0.55, 0.643, 0.775, 0.74, 0.649, 0.593),
    Array(44, 0.673, 0.76, 0.889, 0.865, 0.777, 0.72),
    Array(46, 0.817, 0.894, 1014, 1001, 0.92, 0.865),
    Array(48, 0.984, 1048, 1152, 1148, 1.08, 1.03),
    Array(50, 1.18, 1.23, 1.3, 1.31, 1.26, 1.22),
    Array(52, 1.4, 1.43, 1.47, 1.48, 1.45, 1.43),
    Array(54, 1.66, 1.66, 1.66, 1.66, 1.66, 1.66),
    Array(56, 1.95, 1.92, 1.86, 1.85, 1.88, 1.91),
    Array(58, 2.28, 2.21, 2.09, 2.06, 2.13, 2.2),
    Array(60, 2.66, 2.54, 2.34, 2.28, 2.39, 2.5),
    Array(62, 3.08, 2.92, 2.61, 2.52, 2.66, 2.84),
    Array(64, 3.56, 3.33, 2.92, 2.77, 2.96, 3.19),
    Array(66, 4.09, 3.79, 3.25, 3.04, 3.27, 3.58),
    Array(68, 4.68, 4.31, 3.62, 3.33, 3.6, 4),
    Array(70, 5.34, 4.88, 4.02, 3.64, 3.94, 4.44),
    Array(72, 6.08, 5.51, 4.46, 3.97, 4.31, 4.91),
    Array(74, 6.89, 6.21, 4.94, 4.32, 4.69, 5.4),
    Array(76, 7.78, 6.98, 5.47, 4.7, 5.09, 5.93),
    Array(78, 8.76, 7.83, 6.04, 5.11, 5.51, 6.48),
    Array(80, 9.84, 8.75, 6.67, 5.54, 5.96, 7.06),
    Array(82, 11, 9.8, 7.4, 6, 6.4, 7.7),
    Array(84, 12.3, 10.9, 8.1, 6.5, 6.9, 8.3),
    Array(86, 13.7, 12.1, 8.9, 7, 7.4, 9),
    Array(88, 15.3, 13.4, 9.8, 7.6, 8, 9.6),
    Array(90, 16.9, 14.8, 10.7, 8.2, 8.5, 10.4),

);



function ObtnerTablaF_Equivalencia(pt, tipoEje) {
    //Tabla de equivalencias
    var eqvTabla = Array({ pt: 2, tipoEje: 1, tabla: tablaEqui2s_flex }, { pt: 2.5, tipoEje: 1, tabla: tablaEqui25s_flex }, { pt: 3, tipoEje: 1, tabla: tablaEqui3s_flex },

        { pt: 2, tipoEje: 2, tabla: tablaEqui2ta_flex }, { pt: 2.5, tipoEje: 2, tabla: tablaEqui25ta_flex }, { pt: 3, tipoEje: 2, tabla: tablaEqui3ta_flex },

        { pt: 2, tipoEje: 3, tabla: tablaEqui2tr_flex }, { pt: 2.5, tipoEje: 3, tabla: tablaEqui25tr_flex }, { pt: 3, tipoEje: 3, tabla: tablaEqui3tr_flex },

    );
    var tabla = null;
    //Obtiene la tabla a aplicar
    $(eqvTabla).each(function(i, item) {
        if (item.pt === pt && item.tipoEje === tipoEje) {
            tabla = item.tabla;
        }
    });

    return tabla;
};





function ObtenerInterpolacionBase(pt, tipoEje, kips, sn) {
    var tabla = ObtnerTablaF_Equivalencia(pt, tipoEje);
    if (tabla != null) {
        var colSn = sn;
        console.log('colSn', colSn);
        var imit = kips / 2;
        var iinf = Math.trunc(imit);
        var isup = Math.ceil(imit);
        if (iinf == isup) {
            var value = tabla[iinf][colSn];
            var descript = jQuery.validator.format("{0}", "Al ser un valor de la tabla no se debe realizar interpolación");
            var frm = jQuery.validator.format("Fe = {0}", value);
            var form = jQuery.validator.format("Fe = {0}", value);
            
            var r = { 'tabla': tabla, 'finf': iinf, 'fsup': isup, 'csn': colSn, 'value': value, 'descript': descript, 'formulaVar': form,  'formula': frm  };
            //return tabla[iinf][colSn];
            return r;
        } else {
            var einf = tabla[iinf][colSn];
            var esup = tabla[isup][colSn];

            var edif = (esup - einf);
            var kdif = kips - tabla[iinf][0];

            var eqv = kdif * edif / 2;
            var rst = eqv + einf;
            var result_fe = rst.toFixed(4);
            var descript = jQuery.validator.format("{0}", "Con el rango indicado en la tabla se efectúa una interpolación entre los pesos del eje y los factores de equivalencia de carga");
            var frm = jQuery.validator.format("Fe = {0} + [({1} - {2}) * ({3} - {4}) / ({5} - {6})]", einf, kips, tabla[iinf][0], esup, einf, tabla[isup][0], tabla[iinf][0]);
            var form = jQuery.validator.format("Fe = {0}", result_fe );
            var r = { 'tabla': tabla, 'finf': iinf, 'fsup': isup, 'csn': colSn, 'value': rst, 'descript': descript, 'formulaVar': form,  'formula': frm  };
            return r;            
            //return rst;
        }
    } else {
        console.log('No tabla');
    }

    return { 'tabla': tabla, 'finf': 0, 'fsup': 0, 'csn': 0, 'value': 0 };
}